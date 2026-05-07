# Guide de Déploiement Nginx - Fast Way Agency

Ce guide explique comment déployer le site Fast Way Agency sur un serveur Ubuntu avec Nginx.

## Prérequis

- Serveur Ubuntu 20.04+ avec accès SSH
- Nom de domaine configuré (ex: fastwayagency.com)
- Droits sudo sur le serveur

## 1. Préparation du Serveur

### Connexion au serveur
```bash
ssh user@votre-serveur.com
```

### Mise à jour du système
```bash
sudo apt update
sudo apt upgrade -y
```

### Installation de Nginx
```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

Vérifier que Nginx fonctionne :
```bash
sudo systemctl status nginx
```

## 2. Configuration DNS

Assurez-vous que votre domaine pointe vers l'IP de votre serveur :

**Enregistrement A** :
- Nom: `@` (ou vide)
- Type: `A`
- Valeur: `IP_DE_VOTRE_SERVEUR`
- TTL: 3600

**Enregistrement A pour www** :
- Nom: `www`
- Type: `A`
- Valeur: `IP_DE_VOTRE_SERVEUR`
- TTL: 3600

Vérification DNS :
```bash
dig fastwayagency.com
dig www.fastwayagency.com
```

## 3. Préparation des Fichiers

### Sur votre machine locale

1. **Générer le build de production**
```bash
cd fast-way-agency-clean
npm install
npm run build
```

2. **Créer une archive du build**
```bash
tar -czf fast-way-build.tar.gz -C dist .
```

3. **Transférer vers le serveur**
```bash
scp fast-way-build.tar.gz user@votre-serveur.com:/tmp/
```

### Sur le serveur

1. **Créer le répertoire web**
```bash
sudo mkdir -p /var/www/fastwayagency
sudo chown -R www-data:www-data /var/www/fastwayagency
```

2. **Extraire les fichiers**
```bash
cd /var/www/fastwayagency
sudo tar -xzf /tmp/fast-way-build.tar.gz
sudo chown -R www-data:www-data /var/www/fastwayagency
```

3. **Vérifier les fichiers**
```bash
ls -la /var/www/fastwayagency
# Vous devriez voir : index.html, assets/, etc.
```

## 4. Configuration Nginx

### Créer le fichier de configuration

```bash
sudo nano /etc/nginx/sites-available/fastwayagency
```

Copier cette configuration :

```nginx
# Redirection HTTP vers HTTPS (à activer après SSL)
server {
    listen 80;
    listen [::]:80;
    server_name fastwayagency.com www.fastwayagency.com;
    
    # Pour l'instant, pas de redirection HTTPS
    # return 301 https://$server_name$request_uri;
    
    root /var/www/fastwayagency;
    index index.html;

    # Configuration principale
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache des assets statiques
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Sécurité
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Compression gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml+rss
        application/rss+xml
        font/truetype
        font/opentype
        application/vnd.ms-fontobject
        image/svg+xml;

    # Logs
    access_log /var/log/nginx/fastwayagency-access.log;
    error_log /var/log/nginx/fastwayagency-error.log;
}
```

### Activer le site

```bash
# Créer le lien symbolique
sudo ln -s /etc/nginx/sites-available/fastwayagency /etc/nginx/sites-enabled/

# Désactiver le site par défaut (optionnel)
sudo rm /etc/nginx/sites-enabled/default

# Tester la configuration
sudo nginx -t

# Recharger Nginx
sudo systemctl reload nginx
```

## 5. Configuration SSL avec Let's Encrypt (HTTPS)

### Installation de Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
```

### Obtention du certificat SSL

```bash
sudo certbot --nginx -d fastwayagency.com -d www.fastwayagency.com
```

Suivre les instructions :
- Entrer votre email
- Accepter les conditions
- Choisir si vous voulez partager votre email
- Certbot configurera automatiquement Nginx pour HTTPS

### Renouvellement automatique

Tester le renouvellement :
```bash
sudo certbot renew --dry-run
```

Le renouvellement automatique est déjà configuré via cron.

### Forcer HTTPS

Après l'installation SSL, décommenter la ligne de redirection dans la config Nginx :

```bash
sudo nano /etc/nginx/sites-available/fastwayagency
```

Activer cette ligne (retirer le #) :
```nginx
return 301 https://$server_name$request_uri;
```

Puis recharger :
```bash
sudo nginx -t
sudo systemctl reload nginx
```

## 6. Configuration du Pare-feu

```bash
# Autoriser Nginx
sudo ufw allow 'Nginx Full'

# Si SSH n'est pas encore autorisé
sudo ufw allow OpenSSH

# Activer le pare-feu
sudo ufw enable

# Vérifier le statut
sudo ufw status
```

## 7. Maintenance et Mise à Jour

### Mise à jour du site

1. **Sur votre machine locale**
```bash
# Après modifications du code
npm run build
tar -czf fast-way-build.tar.gz -C dist .
scp fast-way-build.tar.gz user@serveur:/tmp/
```

2. **Sur le serveur**
```bash
# Sauvegarde de l'ancien site
sudo cp -r /var/www/fastwayagency /var/www/fastwayagency.backup

# Nettoyage et extraction
sudo rm -rf /var/www/fastwayagency/*
cd /var/www/fastwayagency
sudo tar -xzf /tmp/fast-way-build.tar.gz
sudo chown -R www-data:www-data /var/www/fastwayagency

# Pas besoin de recharger Nginx (fichiers statiques)
```

### Vérifier les logs

```bash
# Logs d'accès
sudo tail -f /var/log/nginx/fastwayagency-access.log

# Logs d'erreurs
sudo tail -f /var/log/nginx/fastwayagency-error.log

# Logs système Nginx
sudo tail -f /var/log/nginx/error.log
```

### Commandes utiles

```bash
# Redémarrer Nginx
sudo systemctl restart nginx

# Recharger la config (sans coupure)
sudo systemctl reload nginx

# Vérifier la syntaxe de la config
sudo nginx -t

# Voir le statut de Nginx
sudo systemctl status nginx
```

## 8. Optimisations Avancées (Optionnel)

### HTTP/2

Ajouter dans le bloc server HTTPS :
```nginx
listen 443 ssl http2;
listen [::]:443 ssl http2;
```

### Cache navigateur amélioré

```nginx
# Fichiers HTML : pas de cache (pour les mises à jour)
location ~* \.html?$ {
    expires -1;
    add_header Cache-Control "no-store, no-cache, must-revalidate";
}

# Assets avec hash : cache permanent
location ~* \.[a-f0-9]{8}\.(js|css)$ {
    expires max;
    add_header Cache-Control "public, immutable";
}
```

### Compression Brotli

```bash
sudo apt install nginx-module-brotli
```

Puis ajouter dans la config :
```nginx
brotli on;
brotli_comp_level 6;
brotli_types text/plain text/css application/json application/javascript text/xml application/xml;
```

## 9. Monitoring

### Surveillance de l'espace disque

```bash
df -h
```

### Surveillance des performances

```bash
sudo apt install htop
htop
```

### Analyser les logs d'accès

```bash
# Pages les plus visitées
sudo awk '{print $7}' /var/log/nginx/fastwayagency-access.log | sort | uniq -c | sort -rn | head

# IPs qui visitent le plus
sudo awk '{print $1}' /var/log/nginx/fastwayagency-access.log | sort | uniq -c | sort -rn | head
```

## 10. Résolution de Problèmes

### Page blanche / 404

```bash
# Vérifier les permissions
ls -la /var/www/fastwayagency

# Corriger les permissions
sudo chown -R www-data:www-data /var/www/fastwayagency
sudo chmod -R 755 /var/www/fastwayagency
```

### Erreur 502 Bad Gateway

```bash
# Vérifier le statut de Nginx
sudo systemctl status nginx

# Redémarrer Nginx
sudo systemctl restart nginx
```

### Le site ne se charge pas

```bash
# Tester la config
sudo nginx -t

# Vérifier les logs
sudo tail -50 /var/log/nginx/error.log
```

---

**🎉 Votre site est maintenant en ligne !**

Accédez à : https://fastwayagency.com

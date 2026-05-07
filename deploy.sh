#!/bin/bash

# Script de déploiement pour Fast Way Agency
# Usage: ./deploy.sh [environnement]
# Exemple: ./deploy.sh production

set -e

echo "🚀 Début du déploiement Fast Way Agency"

# Couleurs
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
ENVIRONMENT=${1:-production}
BUILD_DIR="dist"

echo -e "${YELLOW}📌 Environnement: $ENVIRONMENT${NC}"

# Étape 1: Nettoyage
echo -e "${YELLOW}🧹 Nettoyage des anciens builds...${NC}"
rm -rf $BUILD_DIR

# Étape 2: Installation des dépendances
echo -e "${YELLOW}📦 Installation des dépendances...${NC}"
npm ci --prefer-offline

# Étape 3: Build de production
echo -e "${YELLOW}🔨 Création du build de production...${NC}"
npm run build

# Vérification du build
if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}❌ Erreur: Le dossier $BUILD_DIR n'a pas été créé${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build créé avec succès dans $BUILD_DIR${NC}"

# Étape 4: Affichage de la taille du build
echo -e "${YELLOW}📊 Taille du build:${NC}"
du -sh $BUILD_DIR
echo ""
ls -lh $BUILD_DIR

# Étape 5: Options de déploiement
echo ""
echo -e "${GREEN}✅ Build prêt pour le déploiement !${NC}"
echo ""
echo "Options de déploiement:"
echo "1. Copier manuellement le contenu de '$BUILD_DIR' vers votre serveur"
echo "2. Utiliser rsync: rsync -avz --delete $BUILD_DIR/ user@server:/var/www/fastwayagency/"
echo "3. Utiliser scp: scp -r $BUILD_DIR/* user@server:/var/www/fastwayagency/"
echo ""
echo "N'oubliez pas de redémarrer votre serveur web (Nginx/Apache) après le déploiement !"

# Optionnel: Déploiement automatique via rsync (décommenter et configurer)
# SERVER_USER="votre-user"
# SERVER_HOST="votre-serveur.com"
# SERVER_PATH="/var/www/fastwayagency"
# 
# echo -e "${YELLOW}🚀 Déploiement vers $SERVER_HOST...${NC}"
# rsync -avz --delete $BUILD_DIR/ $SERVER_USER@$SERVER_HOST:$SERVER_PATH/
# 
# # Redémarrage Nginx
# ssh $SERVER_USER@$SERVER_HOST "sudo systemctl reload nginx"
# 
# echo -e "${GREEN}✅ Déploiement terminé !${NC}"

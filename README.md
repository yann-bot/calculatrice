# 📌 Conception et Analyse d'une Calculatrice avec Historique et Fonctions Financières  

## 🔹 1. Analyse du Besoin  
Je veux une calculatrice qui :  
✅ Effectue des opérations mathématiques générales.  
✅ Intègre des fonctions avancées pour la comptabilité et la finance.  
✅ Permet d’activer ou désactiver l’historique des calculs.  
✅ Nécessite une connexion par email.  

---

## 🔹 2.  Acteurs  
- **Utilisateur** : Se connecte, effectue des calculs standards et financiers, active/désactive la sauvegarde.  
- **Système** : Gère l’authentification, exécute les calculs, stocke l’historique si activé.  

---

## 🔹 3. Cas d'Utilisation  

### 1️⃣ Connexion  
   - L’utilisateur saisit son email et se connecte.  
   - Si l’email est valide, il accède à la calculatrice.  

### 2️⃣ Effectuer un Calcul Standard  
   - L’utilisateur entre une expression mathématique.  
   - Le système calcule et affiche le résultat.  

### 3️⃣ Effectuer un Calcul Financier  
   - L’utilisateur choisit une fonction financière ou comptable.  
   - Il entre les paramètres nécessaires (taux, durée, capital, etc.).  
   - Le système affiche le résultat.  

### 4️⃣ Sauvegarde des Calculs  
   - Si l’option est activée, le calcul et son résultat sont stockés.  

### 5️⃣ Activation/Désactivation de la Sauvegarde  
   - L’utilisateur peut activer ou désactiver l’enregistrement de l’historique.  

### 6️⃣ Consulter l’Historique  
   - L’utilisateur accède aux calculs précédents s’ils sont enregistrés.  

---

## 🔹 4. Fonctions Mathématiques à Intégrer  

### 📊 **Fonctions Comptables et Financières**  
- **Valeur Future (VF)** : \( VF = C \times (1 + r)^n \)  
- **Valeur Actuelle (VA)** : \( VA = \frac{C}{(1 + r)^n} \)  
- **Taux d'Actualisation**  
- **Calcul des Intérêts Simples et Composés**  
- **Amortissement d’un Emprunt (Méthodes Linéaire & Dégressive)**  
- **Taux de Rentabilité Interne (TRI)**  
- **Capitalisation et Décote**  
- **Conversion de Taux Nominal / Effectif**  
- **Calcul du Cash Flow**  

### 🔢 **Fonctions Mathématiques Générales**  
- Addition, Soustraction, Multiplication, Division  
- Puissance, Racine carrée, Factorielle  
- Logarithmes (ln, log)  
- Trigonométrie (sin, cos, tan)  

---

## 🔹 5. Modèle de Données (Simplifié)  

### **Utilisateur**  
- 📌 `id` (Identifiant unique)  
- 📌 `email` (Email de connexion)  
- 📌 `historique_actif` (Booléen pour la sauvegarde)  

### **Historique**  
- 📌 `id` (Identifiant unique)  
- 📌 `user_id` (Utilisateur lié)  
- 📌 `type_calcul` (Standard ou Financier)  
- 📌 `expression` (Le calcul saisi)  
- 📌 `resultat` (Résultat du calcul)  
- 📌 `date` (Date et heure du calcul)  

---

## 🔹 6. Maquette de l'Interface  

### 🎨 **Page de Connexion**  
- Champ Email  
- Bouton Connexion  

### 🎨 **Interface de la Calculatrice**  
- Zone d’affichage des calculs  
- Boutons numériques et opérateurs  
- Section **Calculs Financiers** avec liste des formules  
- Bouton "Activer/Désactiver l’historique"  
- Bouton "Voir Historique"  

### 🎨 **Page d’Historique**  
- Liste des anciens calculs (classés par type)  

---

## 🔹 7. Technologies Possibles  
- **Backend** : Node.js (Express) / Django / Flask  
- **Base de Données** : PostgreSQL / MongoDB / SQLite  
- **Frontend** : React / Vue.js / HTML+CSS+JS  



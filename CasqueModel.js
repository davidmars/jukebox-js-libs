class CasqueModel {

    constructor(identifier, deviceId) {
        /**
         * Identifiant du casque
         * @type {string}
         */
        this.identifier = identifier;
        /**
         * Identifiant adb
         * @type {string}
         */
        this.deviceId = deviceId;
        /**
         * Identifiant socket du casque
         * @type {int}
         */
        this.sockID = 0;
        /**
         * Contenu en cours de lecture
         * @type {ContenuModel}
         */
        this.contenu = null;
        /**
         * Liste des fichiers présents sur le casque
         * @type {String[]}
         * @private
         */
        this._files = null;
        /**
         * position de lecture en secondes
         * @type {number}
         */
        this.playTime = 0;

        /**
         * Duréen en seconde de la lecture
         * @type {number}
         */
        this.totalTime = 120;

        /**
         * Niveau de batterie de 0 à 100
         * @type {number}
         */
        this.batteryLevel = 0;
        /**
         * Est en cours de charge ou non
         * @type {boolean}
         */
        this.isCharging = true;
        /**
         * Si true le casque est connecté en ADB
         * @type {boolean}
         */
        this.adbConnected=false;
        /**
         * Si > 0 c'est que le socket semble fonctionner
         * @type {int}
         */
        this.socketConnected=0;

        /**
         * true si tous les fichiers sont copiés sur le casque
         * @type {boolean}
         */
        this.isSyncro=false;
    }
}
module.exports = CasqueModel;
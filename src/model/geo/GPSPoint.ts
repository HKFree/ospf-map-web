/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
    /**
     * Konstruktor
     * @param {number} latitude
     * @param {number} longtitude
     * @class
     * @author Jakub Menzel
     */
    export class GPSPoint {
        /*private*/ latitude: number;

        /*private*/ longtitude: number;

        public constructor(latitude?: any, longtitude?: any) {
            if (((typeof latitude === 'number') || latitude === null) && ((typeof longtitude === 'number') || longtitude === null)) {
                let __args = arguments;
                this.latitude = 0;
                this.longtitude = 0;
                this.latitude = latitude;
                this.longtitude = longtitude;
            } else if (latitude === undefined && longtitude === undefined) {
                let __args = arguments;
                this.latitude = 0;
                this.longtitude = 0;
            } else throw new Error('invalid overload');
        }

        /**
         * Vrací souřadnici zeměpisné šířky
         * @return {number} lat
         */
        public getLatitude(): number {
            return this.latitude;
        }

        /**
         * Nastavuje souřadnici zeměpisné šířky
         * @param {number} latitude
         */
        public setLatitude(latitude: number) {
            this.latitude = latitude;
        }

        /**
         * Vrací souřadnici zeměpisné délky
         * @return {number} lng
         */
        public getLongtitude(): number {
            return this.longtitude;
        }

        /**
         * Nastavuje souřadnici zeměpisné délky
         * @param {number} longtitude
         */
        public setLongtitude(longtitude: number) {
            this.longtitude = longtitude;
        }
    }


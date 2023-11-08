/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
    /**
     * Konstanty a enumy pro aplikaci OspfVisualiser
     * @author Jan Schovánek
     * @class
     */
    export abstract class Constants {
        /**
         * verze aplikace, pri zmene je nutne take zmenit verzi app v defaultnim property souboru
         */
        public static APP_VERSION: string = "3.0.5";

        /**
         * url k obrázkům
         */
        public static URL_IMG_GUI: string = "/images/";

        /**
         * url k webovym strankam s tipy aplikace
         */
        public static URL_TIPS: string = "tips/";

        /**
         * název souboru s nastavením
         */
        public static SETTINGS_FILE: string = "settings.properties";

        /**
         * komentář do properties souboru s nastavením aplikace
         */
        public static SETTINGS_COMMENT: string = "OSPF VISUALISER SETTINGS";

        /**
         * multilink, multispoj
         */
        public static MULTILINK: string = "MULTILINK";

        /**
         * symetricky spoj
         */
        public static SYMETRIC: string = "SYMETRIC";

        /**
         * název souboru v zip archivu určující název souboru s daty pro načtení OSPF modelu
         */
        public static FILENAME_OSPF_DUMP: string = "ospfdump";

        /**
         * název souboru v zip archivu určující název souboru se jmény routerů
         */
        public static FILENAME_ROUTER_NAMES: string = "router_names";

        /**
         * název souboru v zip archivu určující název souboru informacemi o síti
         */
        public static FILENAME_TOPOLOGY: string = "ospf_database_network";

        /**
         * název souboru v zip archivu určující název souboru s geo souřadnicemi
         */
        public static FILENAME_GEO_POSITIONS: string = "geo";

        /**
         * FR LAYOUT - maximalni pocet iteraci pro FR layout
         */
        public static LAYOUT_FR_MAX_ITERATIONS: number = 1500;

        /**
         * FR LAYOUT - vzdalenosti vrcholu od sebe
         */
        public static LAYOUT_ATTRACTION: number = 0.55;

        /**
         * FR LAYOUT - vzdalenosti vrcholu na spoji od sebe
         */
        public static LAYOUT_REPULSION: number = 0.18;

        /**
         * SPRING LAYOUT -
         */
        public static LAYOUT_STRETCH: number = 0.7;

        /**
         * SPRING LAYOUT -
         */
        public static LAYOUT_REPULSION_RANGE: number = 120;

        /**
         * SPRING LAYOUT -
         */
        public static LAYOUT_FORCE_MULTIPLIER: number = 0.85;

        public static FROM_DATE_TO_DATE: number = 0;

        public static ZIP_SERVER: number = 1;

        public static ZIP_LOCAL: number = 2;

        public static LOCAL_SOURCES: number = 3;

        public static TELNET: number = 4;

        public static CGI: number = 5;

        public static LOCAL: number = 1;

        public static REMOTE_SERVER: number = 2;

        public static FOLDER: number = 1;

        public static ZIP: number = 2;
    }


    export namespace Constants {

        /**
         * Výčet lokalizace aplikace
         * @enum
         * @property {org.hkfree.ospf.model.Constants.LANGUAGE} en_EN
         * @property {org.hkfree.ospf.model.Constants.LANGUAGE} cs_CZ
         * @class
         */
        export enum LANGUAGE {
            en_EN, cs_CZ
        }

        /**
         * Výčet nastavení pracovního režimu
         * @enum
         * @property {org.hkfree.ospf.model.Constants.MODE} SHOW_NEIGHBORS
         * @property {org.hkfree.ospf.model.Constants.MODE} COST_CHANGING
         * @property {org.hkfree.ospf.model.Constants.MODE} SHORTEST_PATH
         * @property {org.hkfree.ospf.model.Constants.MODE} GPS
         * @property {org.hkfree.ospf.model.Constants.MODE} GPS_ALL
         * @property {org.hkfree.ospf.model.Constants.MODE} ZOOM
         * @property {org.hkfree.ospf.model.Constants.MODE} LOCK_ALL
         * @property {org.hkfree.ospf.model.Constants.MODE} LOCK_VERTEX
         * @property {org.hkfree.ospf.model.Constants.MODE} PICKING
         * @property {org.hkfree.ospf.model.Constants.MODE} TRANSFORMING
         * @property {org.hkfree.ospf.model.Constants.MODE} ADD_VERTEXES
         * @property {org.hkfree.ospf.model.Constants.MODE} ADD_EDGES
         * @property {org.hkfree.ospf.model.Constants.MODE} ASYMETRIC_LINKS
         * @property {org.hkfree.ospf.model.Constants.MODE} SHORTEST_PATH_TWO_ROUTERS
         * @property {org.hkfree.ospf.model.Constants.MODE} IPV6
         * @property {org.hkfree.ospf.model.Constants.MODE} NONE
         * @class
         */
        export enum MODE {
            SHOW_NEIGHBORS, COST_CHANGING, SHORTEST_PATH, GPS, GPS_ALL, ZOOM, LOCK_ALL, LOCK_VERTEX, PICKING, TRANSFORMING, ADD_VERTEXES, ADD_EDGES, ASYMETRIC_LINKS, SHORTEST_PATH_TWO_ROUTERS, IPV6, NONE
        }

        export enum LAYOUT {
            LAYOUT_FR, LAYOUT_FR_LLTD, LAYOUT_SPRING_START, LAYOUT_SPRING_STOP, LAYOUT_JS_START
        }

        /**
         * Výčet tvarů spoje
         * @enum
         * @property {org.hkfree.ospf.model.Constants.EDGE_SHAPER} QUAD_CURVE
         * @property {org.hkfree.ospf.model.Constants.EDGE_SHAPER} LINE
         * @property {org.hkfree.ospf.model.Constants.EDGE_SHAPER} BENT_LINE
         * @property {org.hkfree.ospf.model.Constants.EDGE_SHAPER} CUBIC_CURVE
         * @class
         */
        export enum EDGE_SHAPER {
            QUAD_CURVE, LINE, BENT_LINE, CUBIC_CURVE
        }
    }


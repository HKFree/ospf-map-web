/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
import { GPSPoint } from '../../../tools/geo/GPSPoint';
import { AVertex } from './AVertex';

/**
 * Konstruktor
 * @param description
 * @param {string} name
 * @param {GPSPoint} gpsPosition
 * @param isMultilinkCenter
 * @param {string} info
 * @param {boolean} multilinkCenter
 * @class
 * @extends AVertex
 * @author Jakub Menzel
 */
export class RouterVertex extends AVertex  {

    /*private*/ name: string;

    /*private*/ info: string;

    /*private*/ multilink: boolean;

    /*private*/ locked: boolean;

    /*private*/ centerOfShortestPathTree: boolean;

    /*private*/ fullExpanded: boolean;

    /*private*/ permanentlyDisplayed: boolean;

    /*private*/ gpsLatitude: number;

    /*private*/ gpsLongtitude: number;

    /*private*/ actuallyLive: boolean;

    /*private*/ actuallyDead: boolean;

    /*private*/ extraAddedVertex: boolean;

    /*private*/ partOfNewAddedEdge: boolean;

    /*private*/ firstRVOfTwoRVShortestPath: boolean;

    /*private*/ secondRVOfTwoRVShortestPath: boolean;

    /*private*/ founded: boolean;

    public constructor(info?: any, name?: any, gpsPosition?: any, multilinkCenter?: any) {
        if (((typeof info === 'string') || info === null) && ((typeof name === 'string') || name === null) && ((gpsPosition != null && gpsPosition instanceof <any>GPSPoint) || gpsPosition === null) && ((typeof multilinkCenter === 'boolean') || multilinkCenter === null)) {
            let __args = arguments;
            super();
            this.name = "";
            this.info = "";
            this.multilink = false;
            this.locked = false;
            this.centerOfShortestPathTree = false;
            this.fullExpanded = false;
            this.permanentlyDisplayed = false;
            this.gpsLatitude = 0.0;
            this.gpsLongtitude = 0.0;
            this.actuallyLive = false;
            this.actuallyDead = false;
            this.extraAddedVertex = false;
            this.partOfNewAddedEdge = false;
            this.firstRVOfTwoRVShortestPath = false;
            this.secondRVOfTwoRVShortestPath = false;
            this.founded = false;
            this.info = info;
            this.name = name;
            this.multilink = multilinkCenter;
            if (gpsPosition != null){
                this.gpsLatitude = gpsPosition.getLatitude();
                this.gpsLongtitude = gpsPosition.getLongtitude();
            }
        } else if (((typeof info === 'string') || info === null) && ((typeof name === 'string') || name === null) && ((gpsPosition != null && gpsPosition instanceof <any>GPSPoint) || gpsPosition === null) && multilinkCenter === undefined) {
            let __args = arguments;
            super();
            this.name = "";
            this.info = "";
            this.multilink = false;
            this.locked = false;
            this.centerOfShortestPathTree = false;
            this.fullExpanded = false;
            this.permanentlyDisplayed = false;
            this.gpsLatitude = 0.0;
            this.gpsLongtitude = 0.0;
            this.actuallyLive = false;
            this.actuallyDead = false;
            this.extraAddedVertex = false;
            this.partOfNewAddedEdge = false;
            this.firstRVOfTwoRVShortestPath = false;
            this.secondRVOfTwoRVShortestPath = false;
            this.founded = false;
            this.info = info;
            this.name = name;
            if (gpsPosition != null){
                this.gpsLatitude = gpsPosition.getLatitude();
                this.gpsLongtitude = gpsPosition.getLongtitude();
            }
        } else if (((typeof info === 'string') || info === null) && ((typeof name === 'string') || name === null) && gpsPosition === undefined && multilinkCenter === undefined) {
            let __args = arguments;
            super();
            this.name = "";
            this.info = "";
            this.multilink = false;
            this.locked = false;
            this.centerOfShortestPathTree = false;
            this.fullExpanded = false;
            this.permanentlyDisplayed = false;
            this.gpsLatitude = 0.0;
            this.gpsLongtitude = 0.0;
            this.actuallyLive = false;
            this.actuallyDead = false;
            this.extraAddedVertex = false;
            this.partOfNewAddedEdge = false;
            this.firstRVOfTwoRVShortestPath = false;
            this.secondRVOfTwoRVShortestPath = false;
            this.founded = false;
            this.info = info;
            this.name = name;
        } else if (info === undefined && name === undefined && gpsPosition === undefined && multilinkCenter === undefined) {
            let __args = arguments;
            super();
            this.name = "";
            this.info = "";
            this.multilink = false;
            this.locked = false;
            this.centerOfShortestPathTree = false;
            this.fullExpanded = false;
            this.permanentlyDisplayed = false;
            this.gpsLatitude = 0.0;
            this.gpsLongtitude = 0.0;
            this.actuallyLive = false;
            this.actuallyDead = false;
            this.extraAddedVertex = false;
            this.partOfNewAddedEdge = false;
            this.firstRVOfTwoRVShortestPath = false;
            this.secondRVOfTwoRVShortestPath = false;
            this.founded = false;
        } else throw new Error('invalid overload');
    }

    /**
     * 
     * @return {Color}
     */
    public getColorFill(): string {
        if (!this.isVisible()){
            return "";
        }
        if (!this.isEnabled()){
            return "white";
        }
        if (this.isPartOfNewAddedEdge()){
            return "black";
        }
        if (this.isMultilink()){
            return "white";
        }
        if (this.isFounded()){
            return "green";
        }
        if (this.isCenterOfShortestPathTree()){
            return "red";
        }
        if (this.isFirstRVOfTwoRVShortestPath()){
            return "red";
            // TODO return new Color(0, 187, 227);
        }
        if (this.isSecondRVOfTwoRVShortestPath()){
            return "red";
            // TODO return new Color(255, 80, 80);
        }
        if (this.isFullExpanded()){
            return "orange";
            // TODO return Color.ORANGE;
        }
        return "red";
        // TODO return new Color(255, 244, 178);
    }

    /**
     * 
     * @return {Color}
     */
    public getColorStroke(): string {
        if (!this.isVisible()){
            return "";
        }
        return this.isEnabled() && this.isPermanentlyDisplayed() ? "darkgray" : "lightgray";
    }

    // /**
    //  *
    //  * @return {*}
    //  */
    // public getShaper(): Shape {
    //     if (this.isMultilink()){
    //         return new Rectangle2D.Float(-6, -6, 12, 12);
    //     }
    //     return new Ellipse2D.Float(-10, -10, 20, 20);
    // }

    /**
     * 
     * @return {string}
     */
    public getLabel(): string | null {
        if (!this.isVisible()){
            return null;
        }
        if (this.isMultilink()){
            return null;
        }
        return this.getName();
    }

    /**
     * 
     * @return {string}
     */
    public getDescription(): string | null {
        if (this.isMultilink()){
            return this.getInfo();
        }
        let result: string = "<html><body>";
        result += "Name" + ": <b>" + this.getName() + "</b>";
        result += "<br>ID: " + this.getInfo() + "<br>";
        result += "<br>";
        if (this.isPermanentlyDisplayed()){
            result += "permanently displayed" + "<br>";
        } else {
            result += "temporarily displayed" + "<br>";
        }
        if (this.isFullExpanded()){
            result += "all neighbors displayed" + "<br>";
        } else {
            result += "not displayed neighbors exist" + "<br>";
        }
        result += "</body></html>";
        return result;
    }

    /**
     * Vrací název vrcholu
     * @return {string} name
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Nastaví název vrcholu
     * @param {string} name
     */
    public setName(name: string) {
        this.name = name;
    }

    /**
     * Metoda, která vrátí popis vrcholu (IP adresu)
     * @return {string} s
     */
    public getInfo(): string {
        return this.info;
    }

    /**
     * Metoda, která nastaví vrcholu popis
     * @param description
     * @param {string} info
     */
    public setInfo(info: string) {
        this.info = info;
    }

    /**
     * Metoda, vrtátí true pokud se jedná o bod multispoje
     * @return {boolean} boolean
     */
    public isMultilink(): boolean {
        return this.multilink;
    }

    /**
     * Metoda, která nastaví vlastnost,že se jedná o multispoj
     * @param {boolean} isMultilink
     */
    public setMultilink(isMultilink: boolean) {
        this.multilink = isMultilink;
    }

    /**
     * Metoda, která vrací příznak, zda je vrchol zamknutý
     * @return {boolean} boolean
     */
    public isLocked(): boolean {
        return this.locked;
    }

    /**
     * Metoda, která nastaví vrcholu příznak zda je zamknutý
     * @param {boolean} value
     */
    public setLocked(value: boolean) {
        this.locked = value;
    }

    /**
     * Vrací příznak, zda se jedná o vrchol, jehož všichni sousedé jsou zobrazeni
     * @return {boolean} boolean
     */
    public isFullExpanded(): boolean {
        return this.fullExpanded;
    }

    /**
     * Nastaví vrcholu příznak, zda se jedná o vrchol, jehož všichni sousedé jsou zobrazeni
     * @param {boolean} isFullExpanded
     */
    public setFullExpanded(isFullExpanded: boolean) {
        this.fullExpanded = isFullExpanded;
    }

    /**
     * Vrací příznak, zda se jedná o trvale zobrazený vrchol
     * @return {boolean} boolean
     */
    public isPermanentlyDisplayed(): boolean {
        return this.permanentlyDisplayed;
    }

    /**
     * Nastaví příznak, zda se jedná o trvale zobrazený vrchol
     * @param {boolean} isPermanentlyDisplayed
     */
    public setPermanentlyDisplayed(isPermanentlyDisplayed: boolean) {
        this.permanentlyDisplayed = isPermanentlyDisplayed;
    }

    /**
     * Vrací zeměpisnou šířku gps souřadnice routeru
     * @return {number} lat
     */
    public getGpsLatitude(): number {
        return this.gpsLatitude;
    }

    /**
     * Nastaví routeru zeměpisnou šířku souřadnice routeru
     * @param {number} gpsLatitude
     */
    public setGpsLatitude(gpsLatitude: number) {
        this.gpsLatitude = gpsLatitude;
    }

    /**
     * Vrací zeměpisnou délku gps souřadnice routeru
     * @return {number} lng
     */
    public getGpsLongtitude(): number {
        return this.gpsLongtitude;
    }

    /**
     * Nastaví routeru zeměpisnou délku souřadnice routeru
     * @param {number} gpsLongtitude
     */
    public setGpsLongtitude(gpsLongtitude: number) {
        this.gpsLongtitude = gpsLongtitude;
    }

    /**
     * Nastaví routeru gps souřadnice
     * @param {number} gpsLatitude
     * @param {number} gpsLongtitude
     */
    public setGpsCoordinates(gpsLatitude: number, gpsLongtitude: number) {
        this.gpsLatitude = gpsLatitude;
        this.gpsLongtitude = gpsLongtitude;
    }

    /**
     * Vrací bod s gps souřadnicemi routeru
     * @return {GPSPoint} gpspoint
     */
    public getGPSCoordinates(): GPSPoint {
        return new GPSPoint(this.gpsLatitude, this.gpsLongtitude);
    }

    /**
     * Vrací, zda se jedná o aktuálně naběhlý router
     * @return {boolean} boolean
     */
    public isActuallyLive(): boolean {
        return this.actuallyLive;
    }

    /**
     * Nastaví, zda se jedná o aktuálně naběhlýr router
     * @param {boolean} isActuallyLive
     */
    public setActuallyLive(isActuallyLive: boolean) {
        this.actuallyLive = isActuallyLive;
    }

    /**
     * Vrací, zda se jedná o aktuálně spadlý router
     * @return {boolean} boolean
     */
    public isActuallyDead(): boolean {
        return this.actuallyDead;
    }

    /**
     * Nastaví, zda se jedná o aktuálně spadlý router
     * @param {boolean} isActuallyDead
     */
    public setActuallyDead(isActuallyDead: boolean) {
        this.actuallyDead = isActuallyDead;
    }

    /**
     * Vrací příznak, zda se jedná o extra přidaný vrchol při tvorbě topologie
     * @return {boolean} boolean
     */
    public isExtraAddedVertex(): boolean {
        return this.extraAddedVertex;
    }

    /**
     * Nastavuje příznak, zda se jedná o extra přidaný vrchol při tvorbě topologie
     * @param {boolean} isExtraAddedVertex
     */
    public setExtraAddedVertex(isExtraAddedVertex: boolean) {
        this.extraAddedVertex = isExtraAddedVertex;
    }

    /**
     * Vrací příznak, zda se jedná o kořen stromu nejkratších cest
     * @return {boolean} boolean
     */
    public isCenterOfShortestPathTree(): boolean {
        return this.centerOfShortestPathTree;
    }

    /**
     * Nastavuje příznak, zda se jedná o kořen stromu nejkratších cest
     * @param {boolean} isCenterOfShortestPathTree
     */
    public setCenterOfShortestPathTree(isCenterOfShortestPathTree: boolean) {
        this.centerOfShortestPathTree = isCenterOfShortestPathTree;
    }

    /**
     * Vrací příznak, zda se jedná o vybraný vrchol nově tvořené hrany
     * @return {boolean} boolean
     */
    public isPartOfNewAddedEdge(): boolean {
        return this.partOfNewAddedEdge;
    }

    /**
     * Nastavuje příznak, zda se jedná o vybraný vrchol nově tvořené hrany
     * @param {boolean} isPartOfNewAddedEdge
     */
    public setPartOfNewAddedEdge(isPartOfNewAddedEdge: boolean) {
        this.partOfNewAddedEdge = isPartOfNewAddedEdge;
    }

    /**
     * Vrací příznak, zda se jedná o první z vrcholů pro zobrazení nejkratších cest mezi dvěma vrcholy
     * @return {boolean} the isFirstRVOfTwoRVShortestPath
     */
    public isFirstRVOfTwoRVShortestPath(): boolean {
        return this.firstRVOfTwoRVShortestPath;
    }

    /**
     * Nastavuje příznak, zda se jedná o první z vrcholů pro zobrazení nejkratších cest mezi dvěma vrcholy
     * @param {boolean} isFirstRVOfTwoRVShortestPath the isFirstRVOfTwoRVShortestPath to set
     */
    public setFirstRVOfTwoRVShortestPath(isFirstRVOfTwoRVShortestPath: boolean) {
        this.firstRVOfTwoRVShortestPath = isFirstRVOfTwoRVShortestPath;
    }

    /**
     * Vrací příznak, zda se jedná o druhý z vrcholů pro zobrazení nejkratších cest mezi dvěma vrcholy
     * @return {boolean} the isSecondRVOfTwoRVShortestPath
     */
    public isSecondRVOfTwoRVShortestPath(): boolean {
        return this.secondRVOfTwoRVShortestPath;
    }

    /**
     * Nastavuje příznak, zda se jedná o druhý z vrcholů pro zobrazení nejkratších cest mezi dvěma vrcholy
     * @param {boolean} isSecondRVOfTwoRVShortestPath the isSecondRVOfTwoRVShortestPath to set
     */
    public setSecondRVOfTwoRVShortestPath(isSecondRVOfTwoRVShortestPath: boolean) {
        this.secondRVOfTwoRVShortestPath = isSecondRVOfTwoRVShortestPath;
    }

    public isFounded(): boolean {
        return this.founded;
    }

    public setFounded(isFounded: boolean) {
        this.founded = isFounded;
    }
}





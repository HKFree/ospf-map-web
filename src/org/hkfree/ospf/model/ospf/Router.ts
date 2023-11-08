/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
import { GPSPoint } from '../../tools/geo/GPSPoint';
import { StubLink } from './StubLink';
import { ExternalLSA } from './ExternalLSA';
import {java} from "j4ts";
import HashSet = java.util.HashSet;
import Set = java.util.Set;

/**
 * Třída reprezentující router v síti
 * @author Jakub Menzel
 * @author Jan Schovánek
 * @param {string} id
 * @param {string} name
 * @param {GPSPoint} gpsPosition
 * @class
 */
export class Router {
    /*private*/ id: string;

    /*private*/ name: string;

    /*private*/ suffix: string;

    /*private*/ gpsPosition: GPSPoint | null;

    /*private*/ externalLsa: Set<ExternalLSA>;

    /*private*/ stubs: Set<StubLink>;

    // public constructor(id?: any, name?: any, gpsPosition?: any) {
    //     if (((typeof id === 'string') || id === null) && ((typeof name === 'string') || name === null) && ((gpsPosition != null && gpsPosition instanceof <any>GPSPoint) || gpsPosition === null)) {
    //         let __args = arguments;
    //         this.id = "";
    //         this.name = "";
    //         this.suffix = "";
    //         this.gpsPosition = null;
    //         this.externalLsa = <any>(new HashSet<ExternalLSA>());
    //         this.stubs = <any>(new HashSet<StubLink>());
    //         this.id = id;
    //         this.name = name;
    //         this.gpsPosition = gpsPosition;
    //     } else if (((typeof id === 'string') || id === null) && ((typeof name === 'string') || name === null) && gpsPosition === undefined) {
    //         let __args = arguments;
    //         {
    //             let __args = arguments;
    //             let gpsPosition: any = null;
    //             this.id = "";
    //             this.name = "";
    //             this.suffix = "";
    //             this.gpsPosition = null;
    //             this.externalLsa = <any>(new HashSet<ExternalLSA>());
    //             this.stubs = <any>(new HashSet<StubLink>());
    //             this.id = id;
    //             this.name = name;
    //             this.gpsPosition = gpsPosition;
    //         }
    //         this.id = "";
    //         this.name = "";
    //         this.suffix = "";
    //         this.gpsPosition = null;
    //         this.externalLsa = <any>(new HashSet<ExternalLSA>());
    //         this.stubs = <any>(new HashSet<StubLink>());
    //     } else if (((typeof id === 'string') || id === null) && name === undefined && gpsPosition === undefined) {
    //         let __args = arguments;
    //         {
    //             let __args = arguments;
    //             let name: any = "";
    //             {
    //                 let __args = arguments;
    //                 let gpsPosition: any = null;
    //                 this.id = "";
    //                 this.name = "";
    //                 this.suffix = "";
    //                 this.gpsPosition = null;
    //                 this.externalLsa = <any>(new HashSet<ExternalLSA>());
    //                 this.stubs = <any>(new HashSet<StubLink>());
    //                 this.id = id;
    //                 this.name = name;
    //                 this.gpsPosition = gpsPosition;
    //             }
    //             this.id = "";
    //             this.name = "";
    //             this.suffix = "";
    //             this.gpsPosition = null;
    //             this.externalLsa = <any>(new HashSet<ExternalLSA>());
    //             this.stubs = <any>(new HashSet<StubLink>());
    //         }
    //         this.id = "";
    //         this.name = "";
    //         this.suffix = "";
    //         this.gpsPosition = null;
    //         this.externalLsa = <any>(new HashSet<ExternalLSA>());
    //         this.stubs = <any>(new HashSet<StubLink>());
    //     } else throw new Error('invalid overload');
    // }

    constructor(id: string) {
        this.id = id;
        this.name = "";
        this.suffix = "";
        this.gpsPosition = null;
        this.externalLsa = <any>(new HashSet<ExternalLSA>());
        this.stubs = <any>(new HashSet<StubLink>());
    }


    public getId(): string {
        return this.id;
    }

    public setId(id: string) {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getSuffix(): string {
        return this.suffix;
    }

    public setSuffix(suffix: string) {
        this.suffix = suffix;
    }

    public getGpsPosition(): GPSPoint | null {
        return this.gpsPosition;
    }

    public setGpsPosition(gpsPosition: GPSPoint) {
        this.gpsPosition = gpsPosition;
    }

    public getStubs(): Set<StubLink> {
        return this.stubs;
    }

    public setStubs(stubs: Set<StubLink>) {
        this.stubs = stubs;
    }

    public getExternalLsa(): Set<ExternalLSA> {
        return this.externalLsa;
    }

    public setExternalLsa(externalLsa: Set<ExternalLSA>) {
        this.externalLsa = externalLsa;
    }

}



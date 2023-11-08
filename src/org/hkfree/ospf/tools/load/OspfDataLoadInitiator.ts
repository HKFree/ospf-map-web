/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
import { Constants } from '../../model/Constants';
import { OspfModel } from '../../model/ospf/OspfModel';
import { Router } from '../../model/ospf/Router';
//import { FastReverseDNS } from '../rdns/FastReverseDNS';
//import { IPEnumeration } from '../rdns/IPEnumeration';
//import { ReverseDNS } from '../rdns/ReverseDNS';
import { OspfLoader } from './OspfLoader';
import {java} from "j4ts";
import BufferedReader = java.io.BufferedReader;
import List = java.util.List;
import HashMap = java.util.HashMap;
import JSZip, {JSZipObject} from "jszip";
import StringBuffer = java.lang.StringBuffer;
import StringReader = java.io.StringReader;

/**
 * Konstruktor
 * @class
 * @author Jakub Menzel
 */
export class OspfDataLoadInitiator {

    /**
     * Načte soubory ze serveru
     * @param {OspfModel} model
     * @param {string} sourcePath
     * @throws IOException
     * @private
     */
    /*private*/ async loadDataFromRemoteServerFiles(model: OspfModel, sourcePath: string) {
        model.setModelName(sourcePath.substring(sourcePath.lastIndexOf("/") + 1));
        try {
            const response = await fetch(sourcePath);
            if (response.status === 200 || response.status === 0) {
                const zip = await JSZip.loadAsync(response.blob());
                const file = zip.file(Constants.FILENAME_OSPF_DUMP);
                if (file) {
                    OspfLoader.getTopologyFromData(model, await this.fileToBufferedReader(file));
                } else {
                    console.log("Error loading data from remote server, " + Constants.FILENAME_OSPF_DUMP + " not found in ZIP file");
                }
                await this.loadCostsDataFromZipFile(model, zip);
                await this.loadNamesGeoDataFromZipFile(model, zip);
            } else {
                console.log("Error loading data from remote server: " + response.status);
            }
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * Zpracuje soubory s cenami spojů z routerů ze ZIP souboru
     * @param {OspfModel} model
     * @param {ZipInputStream} zipInputStream
     * @throws IOException
     * @private
     */
    /*private*/ async loadCostsDataFromZipFile(model: OspfModel, zip: JSZip) {
        const promises: Promise<string>[] = [];
        const filenames: string[] = [];

        zip.forEach(function (relativePath, file) {
            promises.push(file.async("string"));
            filenames.push(file.name);
        });

        const results = await Promise.all(promises);
        for (let i = 0; i < results.length; i++) {
            const filename = filenames[i];
            const contents = results[i];
            if (filename !== Constants.FILENAME_TOPOLOGY && filename !== Constants.FILENAME_ROUTER_NAMES && filename !== Constants.FILENAME_GEO_POSITIONS) {
                OspfLoader.loadCosts(model, filename, new BufferedReader(new StringReader(contents)));
            }
        }
    }

    /**
     * Zpracuje soubory s cenami ,jmény a pozicemi routerů ze ZIP souboru
     * @param {OspfModel} model
     * @param {ZipInputStream} zipInputStream
     * @throws IOException
     * @private
     */
    /*private*/ async loadNamesGeoDataFromZipFile(model: OspfModel, zip: JSZip) {
        const namesFile = zip.file(Constants.FILENAME_ROUTER_NAMES);
        if (namesFile) {
            OspfLoader.loadRouterNames(model, await this.fileToBufferedReader(namesFile));
        } else {
            console.log("Error loading data from remote server, " + Constants.FILENAME_ROUTER_NAMES + " not found in ZIP file");
        }
        // const geoFile = zip.file(Constants.FILENAME_GEO_POSITIONS);
        // if (geoFile) {
        //     OspfLoader.loadRouterGeoPositions(model, await this.fileToBufferedReader(geoFile));
        // }
    }

    private async fileToBufferedReader(file: JSZipObject)
    {
        const contents = await file.async("string");
        const reader = new StringReader(contents);
        return new BufferedReader(reader);
    }

}






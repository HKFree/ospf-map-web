/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
import { Router } from '../../model/ospf/Router';
import {javaemul} from "j4ts";
import IntegerHelper = javaemul.internal.IntegerHelper;

/**
 * Konstruktor třídy
 * @class
 * @author Jakub Menzel
 */
export class IpComparator {
    public constructor() {
    }

    /**
     * Metoda, která zjistí, zda se jedná o "vyssi" adresu...z důvodu řazení
     * @return {number} int
     * @param {Router} u1
     * @param {Router} u2
     */
    public compare(u1: Router, u2: Router): number {
        const ip1: string = u1.getId();
        const ip2: string = u2.getId();
        return this.compareIps(ip1, ip2);
    }

    /**
     * Porovnává dvě zadané ip adresy
     * @param {string} ip1
     * @param {string} ip2
     * @return {number} int
     * -1 ... ip1 < ip2
     * 0 ... ip1 == ip2
     * 1 ... ip1 > ip2
     */
    public compareIps(ip1: string, ip2: string): number {
        let ip1_1: number;
        let ip1_2: number;
        let ip1_3: number;
        let ip1_4: number;
        let ip2_1: number;
        let ip2_2: number;
        let ip2_3: number;
        let ip2_4: number;
        const octets1: string[] = ip1.split("\\.");
        ip1_1 = IntegerHelper.valueOf(octets1[0]);
        ip1_2 = IntegerHelper.valueOf(octets1[1]);
        ip1_3 = IntegerHelper.valueOf(octets1[2]);
        ip1_4 = IntegerHelper.valueOf(octets1[3]);
        const octets2: string[] = ip2.split("\\.");
        ip2_1 = IntegerHelper.valueOf(octets2[0]);
        ip2_2 = IntegerHelper.valueOf(octets2[1]);
        ip2_3 = IntegerHelper.valueOf(octets2[2]);
        ip2_4 = IntegerHelper.valueOf(octets2[3]);
        if (ip1_1 < ip2_1)return -1;
        if (ip1_1 > ip2_1)return 1;
        if (ip1_1 === ip2_1 && ip1_2 < ip2_2)return -1;
        if (ip1_1 === ip2_1 && ip1_2 > ip2_2)return 1;
        if (ip1_1 === ip2_1 && ip1_2 === ip2_2 && ip1_3 < ip2_3)return -1;
        if (ip1_1 === ip2_1 && ip1_2 === ip2_2 && ip1_3 > ip2_3)return 1;
        if (ip1_1 === ip2_1 && ip1_2 === ip2_2 && ip1_3 === ip2_3 && ip1_4 < ip2_4)return -1;
        if (ip1_1 === ip2_1 && ip1_2 === ip2_2 && ip1_3 === ip2_3 && ip1_4 > ip2_4)return 1;
        return 0;
    }

    /**
     * Metoda zjistí, zda je zadaná IP nižší nebo stejná jako zadaná hraniční IP
     * @param {string} ip
     * @param {string} minIpValue
     * @return {boolean} boolean
     */
    public ipIsHigherOrEqualToMinIpValue(ip: string, minIpValue: string): boolean {
        return (this.compareIps(ip, minIpValue) !== -1);
    }

    /**
     * Metoda zjistí, zda je zadaná IP vyšší nebo stejná jako zadaná hraniční IP
     * @param {string} ip
     * @param {string} maxIpValue
     * @return {boolean} boolean
     */
    public ipIsLowerOrEqualToMaxIpValue(ip: string, maxIpValue: string): boolean {
        return (this.compareIps(ip, maxIpValue) !== 1);
    }
}





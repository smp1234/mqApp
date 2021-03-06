export class DeviceInfo
{
    name: string;
    id:string;
    
    lat:number;
    long:number;
    
    humidity:number;
    temperature:number;
    water:number;
    waterStatus:string;
    healthStatus:string;
    batteryLevel:string;
    uplink:string;
    downlink:string;

    color:string;

    isSimulated:boolean;

    date:Date;
    barometer:any;
    x:any;
    y:any;
    z:any;
}
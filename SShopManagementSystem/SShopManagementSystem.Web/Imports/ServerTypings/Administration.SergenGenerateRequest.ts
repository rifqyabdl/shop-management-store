﻿namespace SShopManagementSystem.Administration {
    export interface SergenGenerateRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
        Table?: SergenTable;
        GenerateOptions?: SergenGenerateOptions;
    }
}

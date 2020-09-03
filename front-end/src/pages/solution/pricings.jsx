import React from 'react'
import Body from '../../pageBuilder/Body'
import BackupPricing from '../../pageBuilder/pricing/BackupPricing'
import CloudLoggingPricing from '../../pageBuilder/pricing/CloudLoggingPricing'
import DNSPricing from '../../pageBuilder/pricing/DNSPricing'
import FirewallPricing from '../../pageBuilder/pricing/FirewallPricing'
import InfraPricing from '../../pageBuilder/pricing/InfraPricing'
import SdwanPricing from '../../pageBuilder/pricing/SdwanPricing'
import StoragePricing from '../../pageBuilder/pricing/StoragePricing'
import UcaasPricing from '../../pageBuilder/pricing/UcaasPricing'
import WebHostingPricing from '../../pageBuilder/pricing/WebHostingPricing'
import WirelessPricing from '../../pageBuilder/pricing/WirelessPricing'


function pricings() {
    return (
        <div>
            BackupPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<BackupPricing/>}
           />
           CloudLoggingPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<CloudLoggingPricing/>}
           />
           DNSPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<DNSPricing/>}
           />
           FirewallPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<FirewallPricing/>}
           />
           InfraPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<InfraPricing/>}
           />
           SdwanPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<SdwanPricing/>}
           />
           StoragePricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<StoragePricing/>}
           />
           UcaasPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<UcaasPricing/>}
           />
           WebHostingPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<WebHostingPricing/>}
           />
           WirelessPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<WirelessPricing/>}
           />

        </div>
    )
}

export default pricings

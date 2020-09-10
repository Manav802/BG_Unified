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
import ContactCenterPricing from '../../pageBuilder/pricing/ContactCenterPricing'
import SipPricing from '../../pageBuilder/pricing/SipPricing'
import CloudExchangePricing from '../../pageBuilder/pricing/CloudExchangePricing'
import DRPricing from '../../pageBuilder/pricing/DRPricing'
import ProxyPricing from '../../pageBuilder/pricing/ProxyPricing'
import VdiPricing from '../../pageBuilder/pricing/VdiPricing'

function pricings() {
    return (
        <div>
            BackupPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<BackupPricing/>}
           />
           CloudExchangePricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<CloudExchangePricing/>}
           />
           CloudLoggingPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<CloudLoggingPricing/>}
           />
           ContactCenterPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<ContactCenterPricing/>}
           />
           DNSPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<DNSPricing/>}
           />
           DRPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<DRPricing/>}
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
           ProxyPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<ProxyPricing/>}
           />
           SdwanPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<SdwanPricing/>}
           />
           SipPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<SipPricing/>}
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
           VdiPricing
           <Body 
            width= "100%"
            type= "pricing"
            data= {<VdiPricing/>}
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

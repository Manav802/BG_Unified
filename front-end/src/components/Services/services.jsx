import React from "react";
import Link from "next/link";

function services(props) {
  return (
    <div>
      <div className="d-flex flex-column footer-content">
        <span className="mt-4 mb-1">IT Infrastructural Services</span>
        <Link href="/services/infra">
          <meta> <a>Computing Infrastructure</a></meta>
        </Link>
        <Link href="/services/storage-unit">
          <a>Storage Unit</a>
        </Link>
        <Link href="/services/cloud-logging">
          <a>Cloud Logging</a>
        </Link>
        <Link href="/services/platform">
          <a>Cloud Platform Service</a>
        </Link>
        <Link href="/services/firewall">
          <a>Firewalls</a>
        </Link>
        <Link href="/services/application-dev">
          <a>Application Development</a>
        </Link>
        <Link href="/services/web-hosting">
          <a>Web Hosting Solutions</a>
        </Link>
        <Link href="/services/backup">
          <a>Backup Services</a>
        </Link>

        <span className="mt-4 mb-1">Disaster Recovery Services</span>
        <Link href="/services/disaster-recovery">
          <a>Disaster Recovery Management</a>
        </Link>
      </div>
      <div className="d-flex flex-column footer-content">
        <span className="mt-4 mb-1">Network Services</span>
        <Link href="/services/sd-wan">
          <a>SD-WAN Optimization</a>
        </Link>
        <Link href="/services/proxy-server">
          <a>Proxy Severs</a>
        </Link>
        <Link href="/services/dns">
          <a>DNS</a>
        </Link>
        <Link href="/services/wireless-networks">
          <a>Wireless Networks</a>
        </Link>
        <Link href="/services/cloud-exchange">
          <a>Cloud Exchange Connectivity</a>
        </Link>
        <Link href="/services/sip-connectivity">
          <a>SIP Connectivity</a>
        </Link>
        <span className="mt-4 mb-1">Collaborative Services</span>
        <Link href="/services/ucaas">
          <a>Unified Communications</a>
        </Link>
        <Link href="/services/customer-support">
          <a>Customer Support as a Service</a>
        </Link>
        <Link href="/services/architectural-consultancy">
          <a>Architectutral Consultancy</a>
        </Link>
      </div>
    </div>
  );
}

export default services;

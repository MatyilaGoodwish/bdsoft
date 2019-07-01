(function() {
  const oren = angular.module("oren");
  oren.service("ProductsSvc", function() {
    this.ProductsCatalogue = [
      {
        product: "Trend Micro™ Maximum Security 2019",
        image: "trendmicro/maximum-security-product.png",
        description:
          "Trend Micro™ Maximum Security 2019 provides complete multi-device protection against viruses, ransomware, dangerous websites, and identity thieves so you can enjoy your digital life safely.",
        download:
          "http://files.trendmicro.com/products/Titanium/15.0/NABU/041719/TrendMicro_15.0_HE_Full.exe"
      },
      {
        product: "Trend Micro™ Internet Security 2019",
        image: "trendmicro/internet-security.png",
        description:
          "Trend Micro™ Internet Security 2019 provides complete multi-device protection against viruses, ransomware, dangerous websites, and identity thieves so you can enjoy your digital life safely.",
        download:
          "http://files.trendmicro.com/products/Titanium/15.0/NABU/041719/TrendMicro_15.0_MR_Full.exe"
      },
      {
        product: "Trend Micro™ Antivirus Plus Security 2019",
        image: "trendmicro/antivirus.png",
        description:
          "Trend Micro™ Antivirus Plus Security 2019 provides complete protection against viruses, ransomware, dangerous websites, and identity thieves so you can enjoy your digital life safely.",
        download:
          "http://files.trendmicro.com/products/Titanium/15.0/NABU/041719/TrendMicro_15.0_EL_Full.exe"
      },
      {
        product: "Trend Micro™ Antivirus for Mac 2019",
        image: "trendmicro/antivirus-mac.png",
        description:
          "Trend Micro™ Antivirus for Mac 2019 provides privacy and protection from online threats and identity thieves so you can enjoy your digital life safely.",
        download:
          "http://files.trendmicro.com/products/iTIS/9.0/Trend%20Micro%20Antivirus-9.0.1351.dmg"
      }
    ];
  });
})();

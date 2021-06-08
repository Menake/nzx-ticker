const data = [
    {
        ticker: "ACE",
        price: 0.001,
        percentChange: 0
    },
    {
        ticker: "AFC",
        price: 0.001,
        percentChange: 0
    },
    {
        ticker: "AFI",
        price: 8.23,
        percentChange: 0.24
    },
    {
        ticker: "AFT",
        price: 4.7,
        percentChange: 0
    },
    {
        ticker: "AGG",
        price: 1.31,
        percentChange: 0.15
    },
    {
        ticker: "AGL",
        price: 1.59,
        percentChange: 5.3
    },
    {
        ticker: "AIA",
        price: 7.59,
        percentChange: -0.26
    },
    {
        ticker: "AIR",
        price: 1.655,
        percentChange: -2.07
    },
    {
        ticker: "AKL",
        price: 0.79,
        percentChange: 0
    },
    {
        ticker: "ALF",
        price: 0.58,
        percentChange: 0
    },
    {
        ticker: "AMP",
        price: 1.24,
        percentChange: 1.64
    },
    {
        ticker: "ANZ",
        price: 30.92,
        percentChange: -1.28
    },
    {
        ticker: "APA",
        price: 2.341,
        percentChange: 1.17
    },
    {
        ticker: "APL",
        price: 0.325,
        percentChange: 1.56
    },
    {
        ticker: "ARB",
        price: 0.205,
        percentChange: 4.59
    },
    {
        ticker: "ARG",
        price: 1.54,
        percentChange: -0.58
    },
    {
        ticker: "ARV",
        price: 1.83,
        percentChange: -0.54
    },
    {
        ticker: "ASD",
        price: 1.686,
        percentChange: -0.3
    },
    {
        ticker: "ASF",
        price: 8.031,
        percentChange: -0.43
    },
    {
        ticker: "ASP",
        price: 1.577,
        percentChange: 1.28
    },
    {
        ticker: "ASR",
        price: 5.992,
        percentChange: -0.22
    },
    {
        ticker: "ATM",
        price: 6.15,
        percentChange: 1.32
    },
    {
        ticker: "AUS",
        price: 3.097,
        percentChange: 0.39
    },
    {
        ticker: "BFG",
        price: 0.375,
        percentChange: 0
    },
    {
        ticker: "BGI",
        price: 0.007,
        percentChange: 0
    },
    {
        ticker: "BGP",
        price: 5.78,
        percentChange: 0
    },
    {
        ticker: "BIT",
        price: 2.33,
        percentChange: 1.3
    },
    {
        ticker: "BLT",
        price: 0.06,
        percentChange: 0
    },
    {
        ticker: "BOT",
        price: 4.257,
        percentChange: 0.78
    },
    {
        ticker: "BRM",
        price: 1.08,
        percentChange: 0
    },
    {
        ticker: "BRMWF",
        price: 0.31,
        percentChange: -2.82
    },
    {
        ticker: "CAV",
        price: 0.4,
        percentChange: -1.23
    },
    {
        ticker: "CBD",
        price: 0.495,
        percentChange: -1
    },
    {
        ticker: "CDI",
        price: 1.12,
        percentChange: 1.82
    },
    {
        ticker: "CEN",
        price: 8.2,
        percentChange: 2.12
    },
    {
        ticker: "CGF",
        price: 0.042,
        percentChange: 0
    },
    {
        ticker: "CMO",
        price: 9.1,
        percentChange: 0
    },
    {
        ticker: "CNU",
        price: 6.58,
        percentChange: 1.54
    },
    {
        ticker: "CO2",
        price: 1.41,
        percentChange: 4.44
    },
    {
        ticker: "CRP",
        price: 0.122,
        percentChange: 0.83
    },
    {
        ticker: "CVT",
        price: 3.34,
        percentChange: 1.21
    },
    {
        ticker: "DGC",
        price: 1.4,
        percentChange: 0
    },
    {
        ticker: "DGL",
        price: 15.05,
        percentChange: 0.67
    },
    {
        ticker: "DIV",
        price: 1.309,
        percentChange: 0.46
    },
    {
        ticker: "DOW",
        price: 0,
        percentChange: 0
    },
    {
        ticker: "EBO",
        price: 32.97,
        percentChange: -0.69
    },
    {
        ticker: "EMF",
        price: 1.523,
        percentChange: 0.86
    },
    {
        ticker: "EMG",
        price: 2.548,
        percentChange: -0.47
    },
    {
        ticker: "ENS",
        price: 1.86,
        percentChange: 0
    },
    {
        ticker: "ERD",
        price: 5.8,
        percentChange: 1.58
    },
    {
        ticker: "ESG",
        price: 2.575,
        percentChange: 0.27
    },
    {
        ticker: "EUF",
        price: 1.946,
        percentChange: 0.46
    },
    {
        ticker: "EUG",
        price: 2.76,
        percentChange: 0.11
    },
    {
        ticker: "EVO",
        price: 0.94,
        percentChange: -7.84
    },
    {
        ticker: "FBU",
        price: 7.95,
        percentChange: 1.27
    },
    {
        ticker: "FCT",
        price: 16.62,
        percentChange: 0
    },
    {
        ticker: "FNZ",
        price: 3.422,
        percentChange: 0.35
    },
    {
        ticker: "FPH",
        price: 29.15,
        percentChange: 0.52
    },
    {
        ticker: "FRE",
        price: 11.97,
        percentChange: -1.48
    },
    {
        ticker: "FSF",
        price: 3.9,
        percentChange: 0
    },
    {
        ticker: "FWL",
        price: 1.76,
        percentChange: 2.33
    },
    {
        ticker: "GBF",
        price: 3.324,
        percentChange: -0.09
    },
    {
        ticker: "GEN",
        price: 0.057,
        percentChange: 0
    },
    {
        ticker: "GENWB",
        price: 0.003,
        percentChange: -76.92
    },
    {
        ticker: "GEO",
        price: 0.119,
        percentChange: 0
    },
    {
        ticker: "GFL",
        price: 0.65,
        percentChange: 1.56
    },
    {
        ticker: "GMT",
        price: 2.29,
        percentChange: 0.88
    },
    {
        ticker: "GNE",
        price: 3.425,
        percentChange: -1.01
    },
    {
        ticker: "GSH",
        price: 0.074,
        percentChange: 0
    },
    {
        ticker: "GTK",
        price: 2.1,
        percentChange: -2.33
    },
    {
        ticker: "GWC",
        price: 0.026,
        percentChange: -3.7
    },
    {
        ticker: "GXH",
        price: 1.17,
        percentChange: 6.36
    },
    {
        ticker: "HFL",
        price: 6.79,
        percentChange: 0
    },
    {
        ticker: "HGH",
        price: 1.94,
        percentChange: 0
    },
    {
        ticker: "HLG",
        price: 7.37,
        percentChange: 0.82
    },
    {
        ticker: "HMY",
        price: 1.58,
        percentChange: 1.94
    },
    {
        ticker: "IFT",
        price: 7.775,
        percentChange: 0.84
    },
    {
        ticker: "IKE",
        price: 1.08,
        percentChange: -2.7
    },
    {
        ticker: "IPL",
        price: 2.06,
        percentChange: -0.48
    },
    {
        ticker: "JLG",
        price: 0.9,
        percentChange: -1.1
    },
    {
        ticker: "JPG",
        price: 8.44,
        percentChange: 0.48
    },
    {
        ticker: "JPN",
        price: 2.14,
        percentChange: 0.8
    },
    {
        ticker: "KFL",
        price: 2.04,
        percentChange: 1.49
    },
    {
        ticker: "KMD",
        price: 1.61,
        percentChange: 0
    },
    {
        ticker: "KPG",
        price: 1.195,
        percentChange: 1.19
    },
    {
        ticker: "LIC",
        price: 1.2,
        percentChange: 0
    },
    {
        ticker: "LIV",
        price: 3.41,
        percentChange: 2.8
    },
    {
        ticker: "MCK",
        price: 2.45,
        percentChange: 0
    },
    {
        ticker: "MCKPA",
        price: 2.47,
        percentChange: 0
    },
    {
        ticker: "MCY",
        price: 6.78,
        percentChange: -0.73
    },
    {
        ticker: "MDZ",
        price: 6.401,
        percentChange: 0.3
    },
    {
        ticker: "MEE",
        price: 0.1,
        percentChange: 3.09
    },
    {
        ticker: "MEL",
        price: 5.4,
        percentChange: 1.41
    },
    {
        ticker: "MFB",
        price: 1.43,
        percentChange: 0
    },
    {
        ticker: "MFT",
        price: 77,
        percentChange: 0
    },
    {
        ticker: "MHJ",
        price: 0.89,
        percentChange: -1.11
    },
    {
        ticker: "MHM",
        price: 0.65,
        percentChange: 1.56
    },
    {
        ticker: "MLN",
        price: 1.49,
        percentChange: 0
    },
    {
        ticker: "MLNWE",
        price: 0.245,
        percentChange: 4.7
    },
    {
        ticker: "MMH",
        price: 6.03,
        percentChange: 0.5
    },
    {
        ticker: "MPG",
        price: 0.425,
        percentChange: 1.19
    },
    {
        ticker: "MWE",
        price: 0.29,
        percentChange: 0
    },
    {
        ticker: "MZY",
        price: 9.158,
        percentChange: 0.96
    },
    {
        ticker: "NGB",
        price: 2.403,
        percentChange: 0.29
    },
    {
        ticker: "NPF",
        price: 1.488,
        percentChange: 0
    },
    {
        ticker: "NPH",
        price: 3.3,
        percentChange: -0.6
    },
    {
        ticker: "NTL",
        price: 0.003,
        percentChange: -25
    },
    {
        ticker: "NTLOB",
        price: 0.003,
        percentChange: 0
    },
    {
        ticker: "NWF",
        price: 0.215,
        percentChange: 0
    },
    {
        ticker: "NZA",
        price: 1,
        percentChange: -4.76
    },
    {
        ticker: "NZB",
        price: 3.078,
        percentChange: -0.13
    },
    {
        ticker: "NZC",
        price: 2.948,
        percentChange: 0
    },
    {
        ticker: "NZG",
        price: 2.688,
        percentChange: 0.3
    },
    {
        ticker: "NZK",
        price: 1.54,
        percentChange: -0.65
    },
    {
        ticker: "NZL",
        price: 1.13,
        percentChange: 0
    },
    {
        ticker: "NZLRA",
        price: 0.018,
        percentChange: 0
    },
    {
        ticker: "NZM",
        price: 0.76,
        percentChange: 1.33
    },
    {
        ticker: "NZO",
        price: 0.425,
        percentChange: 3.66
    },
    {
        ticker: "NZR",
        price: 0.67,
        percentChange: -1.47
    },
    {
        ticker: "NZX",
        price: 2.06,
        percentChange: -1.9
    },
    {
        ticker: "OCA",
        price: 1.46,
        percentChange: 1.39
    },
    {
        ticker: "OZY",
        price: 4.451,
        percentChange: -0.22
    },
    {
        ticker: "PCT",
        price: 1.59,
        percentChange: -0.93
    },
    {
        ticker: "PCTHA",
        price: 1.14,
        percentChange: 0
    },
    {
        ticker: "PEB",
        price: 1.16,
        percentChange: -1.69
    },
    {
        ticker: "PFI",
        price: 2.85,
        percentChange: 0.18
    },
    {
        ticker: "PGW",
        price: 3.35,
        percentChange: -0.89
    },
    {
        ticker: "PHL",
        price: 0.002,
        percentChange: 0
    },
    {
        ticker: "PLP",
        price: 1.153,
        percentChange: 0
    },
    {
        ticker: "POT",
        price: 7.31,
        percentChange: -0.54
    },
    {
        ticker: "PPH",
        price: 1.72,
        percentChange: -0.58
    },
    {
        ticker: "PX1",
        price: 0.77,
        percentChange: -3.75
    },
    {
        ticker: "PYS",
        price: 0.3,
        percentChange: -3.23
    },
    {
        ticker: "QEX",
        price: 0.285,
        percentChange: 0
    },
    {
        ticker: "RAD",
        price: 0.9,
        percentChange: -1.1
    },
    {
        ticker: "RAK",
        price: 0.92,
        percentChange: 0
    },
    {
        ticker: "RBD",
        price: 13.95,
        percentChange: 0.36
    },
    {
        ticker: "RUA",
        price: 0.405,
        percentChange: -3.57
    },
    {
        ticker: "RYM",
        price: 12.61,
        percentChange: -1.48
    },
    {
        ticker: "SAN",
        price: 5.03,
        percentChange: 2.24
    },
    {
        ticker: "SCL",
        price: 4.9,
        percentChange: 0.2
    },
    {
        ticker: "SCT",
        price: 2.65,
        percentChange: 0
    },
    {
        ticker: "SCY",
        price: 0.14,
        percentChange: 0
    },
    {
        ticker: "SDL",
        price: 3.2,
        percentChange: 1.59
    },
    {
        ticker: "SEK",
        price: 4.88,
        percentChange: -0.41
    },
    {
        ticker: "SKC",
        price: 3.45,
        percentChange: -5.74
    },
    {
        ticker: "SKL",
        price: 4.7,
        percentChange: 0.21
    },
    {
        ticker: "SKO",
        price: 7.05,
        percentChange: -0.7
    },
    {
        ticker: "SKT",
        price: 0.169,
        percentChange: -1.17
    },
    {
        ticker: "SML",
        price: 3.56,
        percentChange: 2.3
    },
    {
        ticker: "SMW",
        price: 1.44,
        percentChange: 0
    },
    {
        ticker: "SNC",
        price: 0.008,
        percentChange: 0
    },
    {
        ticker: "SPG",
        price: 2.38,
        percentChange: 0
    },
    {
        ticker: "SPK",
        price: 4.75,
        percentChange: 1.93
    },
    {
        ticker: "SPN",
        price: 8.75,
        percentChange: 2.82
    },
    {
        ticker: "SPY",
        price: 0.9,
        percentChange: 7.14
    },
    {
        ticker: "STU",
        price: 1.14,
        percentChange: 0.88
    },
    {
        ticker: "SUM",
        price: 12.61,
        percentChange: -2.25
    },
    {
        ticker: "SVR",
        price: 0.205,
        percentChange: 2.5
    },
    {
        ticker: "TAH",
        price: 2.4,
        percentChange: 1.27
    },
    {
        ticker: "TCL",
        price: 7.78,
        percentChange: -1.52
    },
    {
        ticker: "TEM",
        price: 20.3,
        percentChange: 0.94
    },
    {
        ticker: "TGG",
        price: 2.92,
        percentChange: 0.34
    },
    {
        ticker: "THL",
        price: 2.57,
        percentChange: 0.78
    },
    {
        ticker: "TLL",
        price: 1.01,
        percentChange: -1.94
    },
    {
        ticker: "TLS",
        price: 3.8,
        percentChange: -0.78
    },
    {
        ticker: "TLT",
        price: 8.01,
        percentChange: -0.12
    },
    {
        ticker: "TNZ",
        price: 2.064,
        percentChange: 0.19
    },
    {
        ticker: "TPW",
        price: 8.54,
        percentChange: -1.84
    },
    {
        ticker: "TRA",
        price: 4.1,
        percentChange: 0
    },
    {
        ticker: "TRU",
        price: 0.077,
        percentChange: 0
    },
    {
        ticker: "TWF",
        price: 2.885,
        percentChange: 0.31
    },
    {
        ticker: "TWH",
        price: 3.2,
        percentChange: -0.65
    },
    {
        ticker: "TWR",
        price: 0.75,
        percentChange: 0
    },
    {
        ticker: "USA",
        price: 2.751,
        percentChange: 0.22
    },
    {
        ticker: "USF",
        price: 10.715,
        percentChange: -0.22
    },
    {
        ticker: "USG",
        price: 7.299,
        percentChange: 0.83
    },
    {
        ticker: "USM",
        price: 6.449,
        percentChange: -0.48
    },
    {
        ticker: "USS",
        price: 6.184,
        percentChange: 0.6
    },
    {
        ticker: "USV",
        price: 3.918,
        percentChange: -0.36
    },
    {
        ticker: "VCT",
        price: 4.01,
        percentChange: -0.99
    },
    {
        ticker: "VGL",
        price: 2.2,
        percentChange: 1.85
    },
    {
        ticker: "VHP",
        price: 3.065,
        percentChange: 0
    },
    {
        ticker: "VTL",
        price: 0.78,
        percentChange: -1.27
    },
    {
        ticker: "WBC",
        price: 28.65,
        percentChange: -0.14
    },
    {
        ticker: "WDT",
        price: 0.087,
        percentChange: -1.14
    },
    {
        ticker: "WHS",
        price: 3.36,
        percentChange: -0.59
    },
    {
        ticker: "ZEL",
        price: 2.64,
        percentChange: -0.38
    }
]

export default data

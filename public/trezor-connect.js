(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TrezorConnect"] = factory();
	else
		root["TrezorConnect"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1514:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NETWORK_IDS = exports.PROTOCOL_MAGICS = void 0;
var PROTOCOL_MAGICS;
(function (PROTOCOL_MAGICS) {
  PROTOCOL_MAGICS[PROTOCOL_MAGICS["mainnet"] = 764824073] = "mainnet";
  PROTOCOL_MAGICS[PROTOCOL_MAGICS["testnet_preprod"] = 1] = "testnet_preprod";
  PROTOCOL_MAGICS[PROTOCOL_MAGICS["testnet_preview"] = 2] = "testnet_preview";
  PROTOCOL_MAGICS[PROTOCOL_MAGICS["testnet_legacy"] = 1097911063] = "testnet_legacy";
})(PROTOCOL_MAGICS = exports.PROTOCOL_MAGICS || (exports.PROTOCOL_MAGICS = {}));
var NETWORK_IDS;
(function (NETWORK_IDS) {
  NETWORK_IDS[NETWORK_IDS["mainnet"] = 1] = "mainnet";
  NETWORK_IDS[NETWORK_IDS["testnet"] = 0] = "testnet";
})(NETWORK_IDS = exports.NETWORK_IDS || (exports.NETWORK_IDS = {}));

/***/ }),

/***/ 9856:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LIBUSB_ERROR_MESSAGE = exports.serializeError = exports.TypedError = exports.TrezorError = exports.ERROR_CODES = void 0;
exports.ERROR_CODES = {
  Init_NotInitialized: 'TrezorConnect not initialized',
  Init_AlreadyInitialized: 'TrezorConnect has been already initialized',
  Init_IframeBlocked: 'Iframe blocked',
  Init_IframeTimeout: 'Iframe timeout',
  Init_ManifestMissing: 'Manifest not set. Read more at https://github.com/trezor/trezor-suite/blob/develop/docs/packages/connect/index.md',
  Popup_ConnectionMissing: 'Unable to establish connection with iframe',
  Transport_Missing: 'Transport is missing',
  Transport_InvalidProtobuf: '',
  Method_InvalidPackage: 'This package is not suitable to work with browser. Use @trezor/connect-web package instead',
  Method_InvalidParameter: '',
  Method_NotAllowed: 'Method not allowed for this configuration',
  Method_PermissionsNotGranted: 'Permissions not granted',
  Method_Cancel: 'Cancelled',
  Method_Interrupted: 'Popup closed',
  Method_UnknownCoin: 'Coin not found',
  Method_AddressNotMatch: 'Addresses do not match',
  Method_FirmwareUpdate_DownloadFailed: 'Failed to download firmware binary',
  Method_Discovery_BundleException: '',
  Method_Override: 'override',
  Method_NoResponse: 'Call resolved without response',
  Backend_NotSupported: 'BlockchainLink settings not found in coins.json',
  Backend_WorkerMissing: '',
  Backend_Disconnected: 'Backend disconnected',
  Backend_Invalid: 'Invalid backend',
  Backend_Error: '',
  Runtime: '',
  Device_NotFound: 'Device not found',
  Device_InitializeFailed: '',
  Device_FwException: '',
  Device_ModeException: '',
  Device_Disconnected: 'Device disconnected',
  Device_UsedElsewhere: 'Device is used in another window',
  Device_InvalidState: 'Passphrase is incorrect',
  Device_CallInProgress: 'Device call in progress'
};
class TrezorError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.message = message;
  }
}
exports.TrezorError = TrezorError;
const TypedError = (id, message) => new TrezorError(id, message || exports.ERROR_CODES[id]);
exports.TypedError = TypedError;
const serializeError = payload => {
  if (payload && payload.error instanceof Error) {
    return {
      error: payload.error.message,
      code: payload.error.code
    };
  }
  return payload;
};
exports.serializeError = serializeError;
exports.LIBUSB_ERROR_MESSAGE = 'LIBUSB_ERROR';

/***/ }),

/***/ 9955:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PROTO = exports.NEM = exports.CARDANO = exports.NETWORK = exports.ERRORS = void 0;
const tslib_1 = __webpack_require__(2970);
exports.ERRORS = tslib_1.__importStar(__webpack_require__(9856));
exports.NETWORK = tslib_1.__importStar(__webpack_require__(3659));
exports.CARDANO = tslib_1.__importStar(__webpack_require__(1514));
exports.NEM = tslib_1.__importStar(__webpack_require__(5891));
exports.PROTO = tslib_1.__importStar(__webpack_require__(9544));

/***/ }),

/***/ 5891:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TxVersion = exports.TxType = exports.Networks = void 0;
var Networks;
(function (Networks) {
  Networks[Networks["mainnet"] = 104] = "mainnet";
  Networks[Networks["testnet"] = 152] = "testnet";
  Networks[Networks["mijin"] = 96] = "mijin";
})(Networks = exports.Networks || (exports.Networks = {}));
var TxType;
(function (TxType) {
  TxType[TxType["TRANSFER"] = 257] = "TRANSFER";
  TxType[TxType["COSIGNING"] = 258] = "COSIGNING";
  TxType[TxType["IMPORTANCE_TRANSFER"] = 2049] = "IMPORTANCE_TRANSFER";
  TxType[TxType["AGGREGATE_MODIFICATION"] = 4097] = "AGGREGATE_MODIFICATION";
  TxType[TxType["MULTISIG_SIGNATURE"] = 4098] = "MULTISIG_SIGNATURE";
  TxType[TxType["MULTISIG"] = 4100] = "MULTISIG";
  TxType[TxType["PROVISION_NAMESPACE"] = 8193] = "PROVISION_NAMESPACE";
  TxType[TxType["MOSAIC_CREATION"] = 16385] = "MOSAIC_CREATION";
  TxType[TxType["SUPPLY_CHANGE"] = 16386] = "SUPPLY_CHANGE";
})(TxType = exports.TxType || (exports.TxType = {}));
var TxVersion;
(function (TxVersion) {
  TxVersion[TxVersion["mainnet"] = 1744830464] = "mainnet";
  TxVersion[TxVersion["testnet"] = -1744830464] = "testnet";
  TxVersion[TxVersion["mijin"] = 1610612736] = "mijin";
})(TxVersion = exports.TxVersion || (exports.TxVersion = {}));

/***/ }),

/***/ 3659:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TYPES = void 0;
exports.TYPES = {
  bitcoin: 'Bitcoin',
  ethereum: 'Ethereum',
  eos: 'Eos',
  nem: 'NEM',
  stellar: 'Stellar',
  cardano: 'Cardano',
  ripple: 'Ripple',
  tezos: 'Tezos',
  binance: 'Binance'
};

/***/ }),

/***/ 5729:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.v = void 0;
const constants_1 = __webpack_require__(4109);
exports.v = {
  webusb: constants_1.TREZOR_USB_DESCRIPTORS,
  whitelist: [{
    origin: 'chrome-extension://imloifkgjagghnncjkhggdhalmcnfklk',
    priority: 1
  }, {
    origin: 'chrome-extension://niebkpllfhmpfbffbfifagfgoamhpflf',
    priority: 1
  }, {
    origin: 'file://',
    priority: 2
  }, {
    origin: 'trezor.io',
    priority: 0
  }, {
    origin: 'sldev.cz',
    priority: 0
  }, {
    origin: 'localhost',
    priority: 0
  }, {
    origin: 'trezoriovpjcahpzkrewelclulmszwbqpzmzgub37gbcjlvluxtruqad.onion',
    priority: 0
  }],
  management: [{
    origin: 'trezor.io'
  }, {
    origin: 'sldev.cz'
  }, {
    origin: 'localhost'
  }],
  knownHosts: [{
    origin: 'imloifkgjagghnncjkhggdhalmcnfklk',
    label: 'Trezor Password Manager (Develop)',
    icon: ''
  }, {
    origin: 'niebkpllfhmpfbffbfifagfgoamhpflf',
    label: 'Trezor Password Manager',
    icon: ''
  }, {
    origin: 'mnpfhpndmjholfdlhpkjfmjkgppmodaf',
    label: 'MetaMask',
    icon: ''
  }, {
    origin: 'webextension@metamask.io',
    label: 'MetaMask',
    icon: ''
  }, {
    origin: 'nkbihfbeogaeaoehlefnkodbefgpgknn',
    label: 'MetaMask',
    icon: ''
  }, {
    origin: 'file://',
    label: ' ',
    icon: ''
  }],
  onionDomains: {
    'trezor.io': 'trezoriovpjcahpzkrewelclulmszwbqpzmzgub37gbcjlvluxtruqad.onion'
  },
  assets: [{
    name: 'coins',
    url: './data/coins.json'
  }, {
    name: 'coinsEth',
    url: './data/coins-eth.json'
  }, {
    name: 'bridge',
    url: './data/bridge/releases.json'
  }, {
    name: 'firmware-t1',
    url: './data/firmware/1/releases.json'
  }, {
    name: 'firmware-t2',
    url: './data/firmware/2/releases.json'
  }],
  messages: './data/messages/messages.json',
  supportedBrowsers: {
    chrome: {
      version: 59,
      download: 'https://www.google.com/chrome/',
      update: 'https://support.google.com/chrome/answer/95414'
    },
    chromium: {
      version: 59,
      download: 'https://www.chromium.org/',
      update: 'https://www.chromium.org/'
    },
    electron: {
      version: 0,
      download: 'https://www.electronjs.org/',
      update: 'https://www.electronjs.org/'
    },
    firefox: {
      version: 54,
      download: 'https://www.mozilla.org/en-US/firefox/new/',
      update: 'https://support.mozilla.org/en-US/kb/update-firefox-latest-version'
    }
  },
  supportedFirmware: [{
    coin: ['xrp', 'txrp'],
    methods: ['getAccountInfo'],
    min: ['0', '2.1.0'],
    max: undefined,
    comment: ["Since firmware 2.1.0 there is a new protobuf field 'destination_tag' in RippleSignTx"]
  }, {
    coin: ['bnb'],
    min: ['1.9.0', '2.3.0'],
    comment: ['There were protobuf backwards incompatible changes with introduction of 1.9.0/2.3.0 firmwares']
  }, {
    coin: ['eth', 'tsep', 'tgor'],
    min: ['1.8.0', '2.1.0'],
    comment: ['There were protobuf backwards incompatible changes.']
  }, {
    methods: ['rippleGetAddress', 'rippleSignTransaction'],
    min: ['0', '2.1.0'],
    comment: ["Since firmware 2.1.0 there is a new protobuf field 'destination_tag' in RippleSignTx"]
  }, {
    methods: ['cardanoGetAddress', 'cardanoGetPublicKey'],
    min: ['0', '2.3.2'],
    comment: ['Shelley fork support since firmware 2.3.2']
  }, {
    methods: ['cardanoSignTransaction'],
    min: ['0', '2.4.2'],
    comment: ['Non-streamed signing no longer supported']
  }, {
    methods: ['cardanoGetNativeScriptHash'],
    min: ['0', '2.4.3'],
    comment: ['Cardano GetNativeScriptHash call added in 2.4.3']
  }, {
    methods: ['tezosSignTransaction'],
    min: ['0', '2.1.8'],
    comment: ['Since 2.1.8 there are new protobuf fields in tezos transaction (Babylon fork)']
  }, {
    methods: ['stellarSignTransaction'],
    min: ['1.9.0', '2.3.0'],
    comment: ['There were protobuf backwards incompatible changes with introduction of 1.9.0/2.3.0 firmwares']
  }, {
    capabilities: ['replaceTransaction', 'amountUnit'],
    min: ['1.9.4', '2.3.5'],
    comment: ['new sign tx process since 1.9.4/2.3.5']
  }, {
    capabilities: ['decreaseOutput'],
    min: ['1.10.0', '2.4.0'],
    comment: ['allow reduce output in RBF transaction since 1.10.0/2.4.0']
  }, {
    capabilities: ['eip1559'],
    min: ['1.10.4', '2.4.2'],
    comment: ['new eth transaction pricing mechanism (EIP1559) since 1.10.4/2.4.2']
  }, {
    capabilities: ['taproot', 'signMessageNoScriptType'],
    min: ['1.10.4', '2.4.3'],
    comment: ['new btc accounts taproot since 1.10.4/2.4.3 (BTC + TEST only)', 'SignMessage with no_script_type support']
  }, {
    coin: ['dcr', 'tdcr'],
    methods: ['signTransaction'],
    min: ['1.10.1', '2.4.0'],
    comment: ['']
  }, {
    methods: ['ethereumSignTypedData'],
    min: ['1.10.5', '2.4.3'],
    comment: ['EIP-712 typed signing support added in 1.10.5/2.4.3']
  }, {
    capabilities: ['eip712-domain-only'],
    min: ['1.10.6', '2.4.4'],
    comment: ['EIP-712 domain-only signing, when primaryType=EIP712Domain']
  }, {
    capabilities: ['coinjoin'],
    methods: ['authorizeCoinjoin', 'cancelCoinjoinAuthorization', 'getOwnershipId', 'getOwnershipProof', 'setBusy', 'unlockPath'],
    min: ['1.12.1', '2.5.3']
  }, {
    methods: ['showDeviceTutorial'],
    min: ['0', '2.6.1'],
    comment: ['Only on T2B1']
  }]
};

/***/ }),

/***/ 6696:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseConnectSettings = exports.corsValidator = exports.DEFAULT_PRIORITY = void 0;
const version_1 = __webpack_require__(9695);
exports.DEFAULT_PRIORITY = 2;
const initialSettings = {
  configSrc: './data/config.json',
  version: version_1.VERSION,
  debug: false,
  priority: exports.DEFAULT_PRIORITY,
  trustedHost: true,
  connectSrc: version_1.DEFAULT_DOMAIN,
  iframeSrc: `${version_1.DEFAULT_DOMAIN}iframe.html`,
  popup: false,
  popupSrc: `${version_1.DEFAULT_DOMAIN}popup.html`,
  webusbSrc: `${version_1.DEFAULT_DOMAIN}webusb.html`,
  transports: undefined,
  pendingTransportEvent: true,
  env: 'node',
  lazyLoad: false,
  timestamp: new Date().getTime(),
  interactionTimeout: 600
};
const parseManifest = manifest => {
  if (!manifest) return;
  if (typeof manifest.email !== 'string') return;
  if (typeof manifest.appUrl !== 'string') return;
  return {
    email: manifest.email,
    appUrl: manifest.appUrl
  };
};
const corsValidator = url => {
  if (typeof url !== 'string') return;
  if (url.match(/^https:\/\/([A-Za-z0-9\-_]+\.)*trezor\.io\//)) return url;
  if (url.match(/^https?:\/\/localhost:[58][0-9]{3}\//)) return url;
  if (url.match(/^https:\/\/([A-Za-z0-9\-_]+\.)*sldev\.cz\//)) return url;
  if (url.match(/^https?:\/\/([A-Za-z0-9\-_]+\.)*trezoriovpjcahpzkrewelclulmszwbqpzmzgub37gbcjlvluxtruqad\.onion\//)) return url;
};
exports.corsValidator = corsValidator;
const parseConnectSettings = (input = {}) => {
  var _a;
  const settings = {
    ...initialSettings
  };
  if ('debug' in input) {
    if (typeof input.debug === 'boolean') {
      settings.debug = input.debug;
    } else if (typeof input.debug === 'string') {
      settings.debug = input.debug === 'true';
    }
  }
  if (input.trustedHost === false) {
    settings.trustedHost = input.trustedHost;
  }
  if (typeof input.connectSrc === 'string' && ((_a = input.connectSrc) === null || _a === void 0 ? void 0 : _a.startsWith('http'))) {
    settings.connectSrc = (0, exports.corsValidator)(input.connectSrc);
  } else if (settings.trustedHost) {
    settings.connectSrc = input.connectSrc;
  }
  const src = settings.connectSrc || version_1.DEFAULT_DOMAIN;
  settings.iframeSrc = `${src}iframe.html`;
  settings.popupSrc = `${src}popup.html`;
  settings.webusbSrc = `${src}webusb.html`;
  if (typeof input.transportReconnect === 'boolean') {
    settings.transportReconnect = input.transportReconnect;
  }
  if (typeof input.webusb === 'boolean') {
    settings.webusb = input.webusb;
  }
  if (Array.isArray(input.transports)) {
    settings.transports = input.transports;
  }
  if (typeof input.popup === 'boolean') {
    settings.popup = input.popup;
  }
  if (typeof input.lazyLoad === 'boolean') {
    settings.lazyLoad = input.lazyLoad;
  }
  if (typeof input.pendingTransportEvent === 'boolean') {
    settings.pendingTransportEvent = input.pendingTransportEvent;
  }
  if (typeof input.extension === 'string') {
    settings.extension = input.extension;
  }
  if (typeof input.env === 'string') {
    settings.env = input.env;
  }
  if (typeof input.timestamp === 'number') {
    settings.timestamp = input.timestamp;
  }
  if (typeof input.interactionTimeout === 'number') {
    settings.interactionTimeout = input.interactionTimeout;
  }
  if (typeof input.manifest === 'object') {
    settings.manifest = parseManifest(input.manifest);
  }
  return settings;
};
exports.parseConnectSettings = parseConnectSettings;

/***/ }),

/***/ 9695:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEFAULT_DOMAIN = exports.VERSION = void 0;
exports.VERSION = '9.1.4';
const versionN = exports.VERSION.split('.').map(s => parseInt(s, 10));
exports.DEFAULT_DOMAIN = `https://connect.trezor.io/${versionN[0]}/`;

/***/ }),

/***/ 9718:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createBlockchainMessage = exports.BLOCKCHAIN = exports.BLOCKCHAIN_EVENT = void 0;
exports.BLOCKCHAIN_EVENT = 'BLOCKCHAIN_EVENT';
exports.BLOCKCHAIN = {
  CONNECT: 'blockchain-connect',
  ERROR: 'blockchain-error',
  BLOCK: 'blockchain-block',
  NOTIFICATION: 'blockchain-notification',
  FIAT_RATES_UPDATE: 'fiat-rates-update'
};
const createBlockchainMessage = (type, payload) => ({
  event: exports.BLOCKCHAIN_EVENT,
  type,
  payload
});
exports.createBlockchainMessage = createBlockchainMessage;

/***/ }),

/***/ 2531:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createResponseMessage = exports.RESPONSE_EVENT = void 0;
const errors_1 = __webpack_require__(9856);
exports.RESPONSE_EVENT = 'RESPONSE_EVENT';
const createResponseMessage = (id, success, payload) => ({
  event: exports.RESPONSE_EVENT,
  type: exports.RESPONSE_EVENT,
  id,
  success,
  payload: success ? payload : (0, errors_1.serializeError)(payload)
});
exports.createResponseMessage = createResponseMessage;

/***/ }),

/***/ 7798:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createErrorMessage = exports.parseMessage = exports.CORE_EVENT = void 0;
exports.CORE_EVENT = 'CORE_EVENT';
const parseMessage = messageData => {
  const message = {
    event: messageData.event,
    type: messageData.type,
    payload: messageData.payload
  };
  if (typeof messageData.id === 'number') {
    message.id = messageData.id;
  }
  if (typeof messageData.success === 'boolean') {
    message.success = messageData.success;
  }
  return message;
};
exports.parseMessage = parseMessage;
const createErrorMessage = error => ({
  success: false,
  payload: {
    error: error.message,
    code: error.code
  }
});
exports.createErrorMessage = createErrorMessage;

/***/ }),

/***/ 2472:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createDeviceMessage = exports.DEVICE = exports.DEVICE_EVENT = void 0;
exports.DEVICE_EVENT = 'DEVICE_EVENT';
exports.DEVICE = {
  CONNECT: 'device-connect',
  CONNECT_UNACQUIRED: 'device-connect_unacquired',
  DISCONNECT: 'device-disconnect',
  CHANGED: 'device-changed',
  ACQUIRE: 'device-acquire',
  RELEASE: 'device-release',
  ACQUIRED: 'device-acquired',
  RELEASED: 'device-released',
  USED_ELSEWHERE: 'device-used_elsewhere',
  LOADING: 'device-loading',
  BUTTON: 'button',
  PIN: 'pin',
  PASSPHRASE: 'passphrase',
  PASSPHRASE_ON_DEVICE: 'passphrase_on_device',
  WORD: 'word'
};
const createDeviceMessage = (type, payload) => ({
  event: exports.DEVICE_EVENT,
  type,
  payload
});
exports.createDeviceMessage = createDeviceMessage;

/***/ }),

/***/ 2380:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createIFrameMessage = exports.IFRAME = void 0;
const ui_request_1 = __webpack_require__(8851);
exports.IFRAME = {
  BOOTSTRAP: 'iframe-bootstrap',
  LOADED: 'iframe-loaded',
  INIT: 'iframe-init',
  ERROR: 'iframe-error',
  CALL: 'iframe-call',
  LOG: 'iframe-log'
};
const createIFrameMessage = (type, payload) => ({
  event: ui_request_1.UI_EVENT,
  type,
  payload
});
exports.createIFrameMessage = createIFrameMessage;

/***/ }),

/***/ 1808:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UI = void 0;
const tslib_1 = __webpack_require__(2970);
const ui_request_1 = __webpack_require__(8851);
const ui_response_1 = __webpack_require__(4018);
tslib_1.__exportStar(__webpack_require__(9718), exports);
tslib_1.__exportStar(__webpack_require__(2531), exports);
tslib_1.__exportStar(__webpack_require__(7798), exports);
tslib_1.__exportStar(__webpack_require__(2472), exports);
tslib_1.__exportStar(__webpack_require__(2380), exports);
tslib_1.__exportStar(__webpack_require__(9076), exports);
tslib_1.__exportStar(__webpack_require__(274), exports);
tslib_1.__exportStar(__webpack_require__(7252), exports);
tslib_1.__exportStar(__webpack_require__(8851), exports);
tslib_1.__exportStar(__webpack_require__(4018), exports);
exports.UI = {
  ...ui_request_1.UI_REQUEST,
  ...ui_response_1.UI_RESPONSE
};

/***/ }),

/***/ 9076:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createPopupMessage = exports.POPUP = void 0;
const ui_request_1 = __webpack_require__(8851);
exports.POPUP = {
  BOOTSTRAP: 'popup-bootstrap',
  LOADED: 'popup-loaded',
  CORE_LOADED: 'popup-core-loaded',
  INIT: 'popup-init',
  ERROR: 'popup-error',
  EXTENSION_USB_PERMISSIONS: 'open-usb-permissions',
  HANDSHAKE: 'popup-handshake',
  CLOSED: 'popup-closed',
  CANCEL_POPUP_REQUEST: 'ui-cancel-popup-request',
  CLOSE_WINDOW: 'window.close',
  ANALYTICS_RESPONSE: 'popup-analytics-response'
};
const createPopupMessage = (type, payload) => ({
  event: ui_request_1.UI_EVENT,
  type,
  payload
});
exports.createPopupMessage = createPopupMessage;

/***/ }),

/***/ 274:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createTransportMessage = exports.TRANSPORT_EVENT = exports.TRANSPORT = void 0;
const errors_1 = __webpack_require__(9856);
var constants_1 = __webpack_require__(4109);
Object.defineProperty(exports, "TRANSPORT", ({
  enumerable: true,
  get: function () {
    return constants_1.TRANSPORT;
  }
}));
exports.TRANSPORT_EVENT = 'TRANSPORT_EVENT';
const createTransportMessage = (type, payload) => ({
  event: exports.TRANSPORT_EVENT,
  type,
  payload: 'error' in payload ? (0, errors_1.serializeError)(payload) : payload
});
exports.createTransportMessage = createTransportMessage;

/***/ }),

/***/ 7252:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 8851:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createUiMessage = exports.UI_REQUEST = exports.UI_EVENT = void 0;
exports.UI_EVENT = 'UI_EVENT';
exports.UI_REQUEST = {
  TRANSPORT: 'ui-no_transport',
  BOOTLOADER: 'ui-device_bootloader_mode',
  NOT_IN_BOOTLOADER: 'ui-device_not_in_bootloader_mode',
  REQUIRE_MODE: 'ui-device_require_mode',
  INITIALIZE: 'ui-device_not_initialized',
  SEEDLESS: 'ui-device_seedless',
  FIRMWARE_OLD: 'ui-device_firmware_old',
  FIRMWARE_OUTDATED: 'ui-device_firmware_outdated',
  FIRMWARE_NOT_SUPPORTED: 'ui-device_firmware_unsupported',
  FIRMWARE_NOT_COMPATIBLE: 'ui-device_firmware_not_compatible',
  FIRMWARE_NOT_INSTALLED: 'ui-device_firmware_not_installed',
  FIRMWARE_PROGRESS: 'ui-firmware-progress',
  DEVICE_NEEDS_BACKUP: 'ui-device_needs_backup',
  REQUEST_UI_WINDOW: 'ui-request_window',
  CLOSE_UI_WINDOW: 'ui-close_window',
  REQUEST_PERMISSION: 'ui-request_permission',
  REQUEST_CONFIRMATION: 'ui-request_confirmation',
  REQUEST_PIN: 'ui-request_pin',
  INVALID_PIN: 'ui-invalid_pin',
  REQUEST_PASSPHRASE: 'ui-request_passphrase',
  REQUEST_PASSPHRASE_ON_DEVICE: 'ui-request_passphrase_on_device',
  INVALID_PASSPHRASE: 'ui-invalid_passphrase',
  CONNECT: 'ui-connect',
  LOADING: 'ui-loading',
  SET_OPERATION: 'ui-set_operation',
  SELECT_DEVICE: 'ui-select_device',
  SELECT_ACCOUNT: 'ui-select_account',
  SELECT_FEE: 'ui-select_fee',
  UPDATE_CUSTOM_FEE: 'ui-update_custom_fee',
  INSUFFICIENT_FUNDS: 'ui-insufficient_funds',
  REQUEST_BUTTON: 'ui-button',
  REQUEST_WORD: 'ui-request_word',
  LOGIN_CHALLENGE_REQUEST: 'ui-login_challenge_request',
  BUNDLE_PROGRESS: 'ui-bundle_progress',
  ADDRESS_VALIDATION: 'ui-address_validation',
  IFRAME_FAILURE: 'ui-iframe_failure'
};
const createUiMessage = (type, payload) => ({
  event: exports.UI_EVENT,
  type,
  payload
});
exports.createUiMessage = createUiMessage;

/***/ }),

/***/ 4018:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createUiResponse = exports.UI_RESPONSE = void 0;
const ui_request_1 = __webpack_require__(8851);
exports.UI_RESPONSE = {
  RECEIVE_PERMISSION: 'ui-receive_permission',
  RECEIVE_CONFIRMATION: 'ui-receive_confirmation',
  RECEIVE_PIN: 'ui-receive_pin',
  RECEIVE_PASSPHRASE: 'ui-receive_passphrase',
  RECEIVE_DEVICE: 'ui-receive_device',
  RECEIVE_ACCOUNT: 'ui-receive_account',
  RECEIVE_FEE: 'ui-receive_fee',
  RECEIVE_WORD: 'ui-receive_word',
  INVALID_PASSPHRASE_ACTION: 'ui-invalid_passphrase_action',
  CHANGE_SETTINGS: 'ui-change_settings',
  LOGIN_CHALLENGE_RESPONSE: 'ui-login_challenge_response'
};
const createUiResponse = (type, payload) => ({
  event: ui_request_1.UI_EVENT,
  type,
  payload
});
exports.createUiResponse = createUiResponse;

/***/ }),

/***/ 654:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseConnectSettings = void 0;
const tslib_1 = __webpack_require__(2970);
tslib_1.__exportStar(__webpack_require__(9955), exports);
tslib_1.__exportStar(__webpack_require__(1808), exports);
tslib_1.__exportStar(__webpack_require__(1627), exports);
var connectSettings_1 = __webpack_require__(6696);
Object.defineProperty(exports, "parseConnectSettings", ({
  enumerable: true,
  get: function () {
    return connectSettings_1.parseConnectSettings;
  }
}));

/***/ }),

/***/ 3329:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.d = void 0;
const events_1 = __webpack_require__(1808);
const factory = ({
  eventEmitter,
  manifest,
  init,
  call,
  requestLogin,
  uiResponse,
  renderWebUSBButton,
  disableWebUSB,
  requestWebUSBDevice,
  cancel,
  dispose
}) => {
  const api = {
    manifest,
    init,
    getSettings: () => call({
      method: 'getSettings'
    }),
    on: (type, fn) => {
      eventEmitter.on(type, fn);
    },
    off: (type, fn) => {
      eventEmitter.removeListener(type, fn);
    },
    removeAllListeners: type => {
      if (typeof type === 'string') {
        eventEmitter.removeAllListeners(type);
      } else {
        eventEmitter.removeAllListeners();
      }
    },
    uiResponse,
    blockchainGetAccountBalanceHistory: params => call({
      ...params,
      method: 'blockchainGetAccountBalanceHistory'
    }),
    blockchainGetCurrentFiatRates: params => call({
      ...params,
      method: 'blockchainGetCurrentFiatRates'
    }),
    blockchainGetFiatRatesForTimestamps: params => call({
      ...params,
      method: 'blockchainGetFiatRatesForTimestamps'
    }),
    blockchainDisconnect: params => call({
      ...params,
      method: 'blockchainDisconnect'
    }),
    blockchainEstimateFee: params => call({
      ...params,
      method: 'blockchainEstimateFee'
    }),
    blockchainGetTransactions: params => call({
      ...params,
      method: 'blockchainGetTransactions'
    }),
    blockchainSetCustomBackend: params => call({
      ...params,
      method: 'blockchainSetCustomBackend'
    }),
    blockchainSubscribe: params => call({
      ...params,
      method: 'blockchainSubscribe'
    }),
    blockchainSubscribeFiatRates: params => call({
      ...params,
      method: 'blockchainSubscribeFiatRates'
    }),
    blockchainUnsubscribe: params => call({
      ...params,
      method: 'blockchainUnsubscribe'
    }),
    blockchainUnsubscribeFiatRates: params => call({
      ...params,
      method: 'blockchainUnsubscribeFiatRates'
    }),
    requestLogin: params => requestLogin(params),
    cardanoGetAddress: params => call({
      ...params,
      method: 'cardanoGetAddress',
      useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
    }),
    cardanoGetNativeScriptHash: params => call({
      ...params,
      method: 'cardanoGetNativeScriptHash'
    }),
    cardanoGetPublicKey: params => call({
      ...params,
      method: 'cardanoGetPublicKey'
    }),
    cardanoSignTransaction: params => call({
      ...params,
      method: 'cardanoSignTransaction'
    }),
    cipherKeyValue: params => call({
      ...params,
      method: 'cipherKeyValue'
    }),
    composeTransaction: params => call({
      ...params,
      method: 'composeTransaction'
    }),
    ethereumGetAddress: params => call({
      ...params,
      method: 'ethereumGetAddress',
      useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
    }),
    ethereumGetPublicKey: params => call({
      ...params,
      method: 'ethereumGetPublicKey'
    }),
    ethereumSignMessage: params => call({
      ...params,
      method: 'ethereumSignMessage'
    }),
    ethereumSignTransaction: params => call({
      ...params,
      method: 'ethereumSignTransaction'
    }),
    ethereumSignTypedData: params => call({
      ...params,
      method: 'ethereumSignTypedData'
    }),
    ethereumVerifyMessage: params => call({
      ...params,
      method: 'ethereumVerifyMessage'
    }),
    getAccountInfo: params => call({
      ...params,
      method: 'getAccountInfo'
    }),
    getAddress: params => call({
      ...params,
      method: 'getAddress',
      useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
    }),
    getDeviceState: params => call({
      ...params,
      method: 'getDeviceState'
    }),
    getFeatures: params => call({
      ...params,
      method: 'getFeatures'
    }),
    getFirmwareHash: params => call({
      ...params,
      method: 'getFirmwareHash'
    }),
    getOwnershipId: params => call({
      ...params,
      method: 'getOwnershipId'
    }),
    getOwnershipProof: params => call({
      ...params,
      method: 'getOwnershipProof'
    }),
    getPublicKey: params => call({
      ...params,
      method: 'getPublicKey'
    }),
    nemGetAddress: params => call({
      ...params,
      method: 'nemGetAddress',
      useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
    }),
    nemSignTransaction: params => call({
      ...params,
      method: 'nemSignTransaction'
    }),
    pushTransaction: params => call({
      ...params,
      method: 'pushTransaction'
    }),
    rippleGetAddress: params => call({
      ...params,
      method: 'rippleGetAddress',
      useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
    }),
    rippleSignTransaction: params => call({
      ...params,
      method: 'rippleSignTransaction'
    }),
    signMessage: params => call({
      ...params,
      method: 'signMessage'
    }),
    signTransaction: params => call({
      ...params,
      method: 'signTransaction'
    }),
    stellarGetAddress: params => call({
      ...params,
      method: 'stellarGetAddress',
      useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
    }),
    stellarSignTransaction: params => call({
      ...params,
      method: 'stellarSignTransaction'
    }),
    tezosGetAddress: params => call({
      ...params,
      method: 'tezosGetAddress',
      useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
    }),
    tezosGetPublicKey: params => call({
      ...params,
      method: 'tezosGetPublicKey'
    }),
    tezosSignTransaction: params => call({
      ...params,
      method: 'tezosSignTransaction'
    }),
    unlockPath: params => call({
      ...params,
      method: 'unlockPath'
    }),
    eosGetPublicKey: params => call({
      ...params,
      method: 'eosGetPublicKey'
    }),
    eosSignTransaction: params => call({
      ...params,
      method: 'eosSignTransaction'
    }),
    binanceGetAddress: params => call({
      ...params,
      method: 'binanceGetAddress',
      useEventListener: eventEmitter.listenerCount(events_1.UI.ADDRESS_VALIDATION) > 0
    }),
    binanceGetPublicKey: params => call({
      ...params,
      method: 'binanceGetPublicKey'
    }),
    binanceSignTransaction: params => call({
      ...params,
      method: 'binanceSignTransaction'
    }),
    verifyMessage: params => call({
      ...params,
      method: 'verifyMessage'
    }),
    resetDevice: params => call({
      ...params,
      method: 'resetDevice'
    }),
    wipeDevice: params => call({
      ...params,
      method: 'wipeDevice'
    }),
    checkFirmwareAuthenticity: params => call({
      ...params,
      method: 'checkFirmwareAuthenticity'
    }),
    applyFlags: params => call({
      ...params,
      method: 'applyFlags'
    }),
    applySettings: params => call({
      ...params,
      method: 'applySettings'
    }),
    authorizeCoinjoin: params => call({
      ...params,
      method: 'authorizeCoinjoin'
    }),
    cancelCoinjoinAuthorization: params => call({
      ...params,
      method: 'cancelCoinjoinAuthorization'
    }),
    showDeviceTutorial: params => call({
      ...params,
      method: 'showDeviceTutorial'
    }),
    backupDevice: params => call({
      ...params,
      method: 'backupDevice'
    }),
    changePin: params => call({
      ...params,
      method: 'changePin'
    }),
    firmwareUpdate: params => call({
      ...params,
      method: 'firmwareUpdate'
    }),
    recoveryDevice: params => call({
      ...params,
      method: 'recoveryDevice'
    }),
    getCoinInfo: params => call({
      ...params,
      method: 'getCoinInfo'
    }),
    rebootToBootloader: params => call({
      ...params,
      method: 'rebootToBootloader'
    }),
    setBusy: params => call({
      ...params,
      method: 'setBusy'
    }),
    setProxy: params => call({
      ...params,
      method: 'setProxy'
    }),
    dispose,
    cancel,
    renderWebUSBButton,
    disableWebUSB,
    requestWebUSBDevice
  };
  return api;
};
exports.d = factory;

/***/ }),

/***/ 9245:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 1276:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 3794:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 6365:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 2258:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 2264:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 6113:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 7489:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 3593:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 7493:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 8037:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 790:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DeviceModelInternal = exports.FirmwareType = void 0;
var FirmwareType;
(function (FirmwareType) {
  FirmwareType["BitcoinOnly"] = "bitcoin-only";
  FirmwareType["Regular"] = "regular";
})(FirmwareType = exports.FirmwareType || (exports.FirmwareType = {}));
var messages_1 = __webpack_require__(9544);
Object.defineProperty(exports, "DeviceModelInternal", ({
  enumerable: true,
  get: function () {
    return messages_1.DeviceModelInternal;
  }
}));

/***/ }),

/***/ 1598:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 6474:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 1627:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(2970);
tslib_1.__exportStar(__webpack_require__(6113), exports);
tslib_1.__exportStar(__webpack_require__(9245), exports);
tslib_1.__exportStar(__webpack_require__(8037), exports);
tslib_1.__exportStar(__webpack_require__(790), exports);
tslib_1.__exportStar(__webpack_require__(1598), exports);
tslib_1.__exportStar(__webpack_require__(6474), exports);
tslib_1.__exportStar(__webpack_require__(9518), exports);
tslib_1.__exportStar(__webpack_require__(9342), exports);
tslib_1.__exportStar(__webpack_require__(6365), exports);
tslib_1.__exportStar(__webpack_require__(1276), exports);
tslib_1.__exportStar(__webpack_require__(3794), exports);
tslib_1.__exportStar(__webpack_require__(2258), exports);
tslib_1.__exportStar(__webpack_require__(7489), exports);
tslib_1.__exportStar(__webpack_require__(2264), exports);
tslib_1.__exportStar(__webpack_require__(3593), exports);
tslib_1.__exportStar(__webpack_require__(7493), exports);

/***/ }),

/***/ 9518:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 9342:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 6521:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = exports.Yn = exports.KR = __webpack_unused_export__ = exports.O9 = void 0;
const green = '#bada55';
const blue = '#20abd8';
const orange = '#f4a744';
const yellow = '#fbd948';
exports.O9 = {
  '@trezor/connect': `color: ${blue}; background: #000;`,
  '@trezor/connect-web': `color: ${blue}; background: #000;`,
  '@trezor/connect-webextension': `color: ${blue}; background: #000;`,
  '@trezor/connect-webextension/serviceWorkerWindowChannel': `color: ${blue}; background: #000;`,
  IFrame: `color: ${orange}; background: #000;`,
  Core: `color: ${orange}; background: #000;`,
  DeviceList: `color: ${green}; background: #000;`,
  Device: `color: ${green}; background: #000;`,
  DeviceCommands: `color: ${green}; background: #000;`,
  '@trezor/transport': `color: ${green}; background: #000;`,
  InteractionTimeout: `color: ${green}; background: #000;`,
  '@trezor/connect-popup': `color: ${yellow}; background: #000;`
};
const MAX_ENTRIES = 100;
class Log {
  constructor(prefix, enabled, logWriter) {
    this.prefix = prefix;
    this.enabled = enabled;
    this.messages = [];
    this.css = typeof window !== 'undefined' && exports.O9[prefix] ? exports.O9[prefix] : '';
    if (logWriter) {
      this.logWriter = logWriter;
    }
  }
  addMessage(level, prefix, ...args) {
    const message = {
      level,
      prefix,
      css: this.css,
      message: args,
      timestamp: Date.now()
    };
    this.messages.push(message);
    if (this.logWriter) {
      try {
        this.logWriter.add(message);
      } catch (err) {
        console.error('There was an error adding log message', err, message);
      }
    }
    if (this.messages.length > MAX_ENTRIES) {
      this.messages.shift();
    }
  }
  setWriter(logWriter) {
    this.logWriter = logWriter;
  }
  log(...args) {
    this.addMessage('log', this.prefix, ...args);
    if (this.enabled) {
      console.log(`%c${this.prefix}`, this.css, ...args);
    }
  }
  error(...args) {
    this.addMessage('error', this.prefix, ...args);
    if (this.enabled) {
      console.error(`%c${this.prefix}`, this.css, ...args);
    }
  }
  warn(...args) {
    this.addMessage('warn', this.prefix, ...args);
    if (this.enabled) {
      console.warn(`%c${this.prefix}`, this.css, ...args);
    }
  }
  debug(...args) {
    this.addMessage('debug', this.prefix, ...args);
    if (this.enabled) {
      if (this.css) {
        console.log(`%c${this.prefix}`, this.css, ...args);
      } else {
        console.log(this.prefix, ...args);
      }
    }
  }
}
__webpack_unused_export__ = Log;
const _logs = {};
let writer;
const initLog = (prefix, enabled, logWriter) => {
  const instanceWriter = logWriter || writer;
  const instance = new Log(prefix, !!enabled, instanceWriter);
  _logs[prefix] = instance;
  return instance;
};
exports.KR = initLog;
const setLogWriter = logWriterFactory => {
  Object.keys(_logs).forEach(key => {
    writer = logWriterFactory();
    _logs[key].setWriter(writer);
  });
};
exports.Yn = setLogWriter;
const enableLog = enabled => {
  Object.keys(_logs).forEach(key => {
    _logs[key].enabled = !!enabled;
  });
};
__webpack_unused_export__ = enableLog;
const enableLogByPrefix = (prefix, enabled) => {
  if (_logs[prefix]) {
    _logs[prefix].enabled = enabled;
  }
};
__webpack_unused_export__ = enableLogByPrefix;
const getLog = () => {
  let logs = [];
  Object.keys(_logs).forEach(key => {
    logs = logs.concat(_logs[key].messages);
  });
  logs.sort((a, b) => a.timestamp - b.timestamp);
  return logs;
};
__webpack_unused_export__ = getLog;

/***/ }),

/***/ 3163:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = __webpack_unused_export__ = exports.P$ = void 0;
const utils_1 = __webpack_require__(4542);
const getOrigin = url => {
  var _a;
  if (typeof url !== 'string') return 'unknown';
  if (url.indexOf('file://') === 0) return 'file://';
  const [origin] = (_a = url.match(/^https?:\/\/[^/]+/)) !== null && _a !== void 0 ? _a : [];
  return origin !== null && origin !== void 0 ? origin : 'unknown';
};
exports.P$ = getOrigin;
const getHost = url => {
  var _a;
  if (typeof url !== 'string') return;
  const [,, uri] = (_a = url.match(/^(https?):\/\/([^:/]+)?/i)) !== null && _a !== void 0 ? _a : [];
  if (uri) {
    const parts = uri.split('.');
    return parts.length > 2 ? parts.slice(parts.length - 2, parts.length).join('.') : uri;
  }
};
__webpack_unused_export__ = getHost;
const getOnionDomain = (url, dict) => {
  var _a;
  if (Array.isArray(url)) return url.map(u => {
    var _a;
    return (_a = (0, utils_1.urlToOnion)(u, dict)) !== null && _a !== void 0 ? _a : u;
  });
  if (typeof url === 'string') return (_a = (0, utils_1.urlToOnion)(url, dict)) !== null && _a !== void 0 ? _a : url;
  return url;
};
__webpack_unused_export__ = getOnionDomain;

/***/ }),

/***/ 9544:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TezosBallotType = exports.TezosContractType = exports.StellarSignerType = exports.StellarMemoType = exports.StellarAssetType = exports.NEMImportanceTransferMode = exports.NEMModificationType = exports.NEMSupplyChangeType = exports.NEMMosaicLevy = exports.MoneroNetworkType = exports.Enum_WordRequestType = exports.RecoveryDeviceType = exports.SdProtectOperationType = exports.Enum_Capability = exports.Enum_HomescreenFormat = exports.Enum_SafetyCheckLevel = exports.Enum_BackupType = exports.EthereumDataType = exports.EthereumDefinitionType = exports.DebugPhysicalButton = exports.DebugButton = exports.Enum_PinMatrixRequestType = exports.Enum_ButtonRequestType = exports.FailureType = exports.CardanoTxWitnessType = exports.CardanoTxSigningMode = exports.CardanoCVoteRegistrationFormat = exports.CardanoTxAuxiliaryDataSupplementType = exports.CardanoPoolRelayType = exports.CardanoCertificateType = exports.CardanoTxOutputSerializationFormat = exports.CardanoNativeScriptHashDisplayFormat = exports.CardanoNativeScriptType = exports.CardanoAddressType = exports.CardanoDerivationType = exports.Enum_RequestType = exports.AmountUnit = exports.DecredStakingSpendType = exports.Enum_OutputScriptType = exports.Enum_InputScriptType = exports.BinanceTimeInForce = exports.BinanceOrderSide = exports.BinanceOrderType = exports.DeviceModelInternal = void 0;
var DeviceModelInternal;
(function (DeviceModelInternal) {
  DeviceModelInternal["T1B1"] = "T1B1";
  DeviceModelInternal["T2T1"] = "T2T1";
  DeviceModelInternal["T2B1"] = "T2B1";
})(DeviceModelInternal = exports.DeviceModelInternal || (exports.DeviceModelInternal = {}));
var BinanceOrderType;
(function (BinanceOrderType) {
  BinanceOrderType[BinanceOrderType["OT_UNKNOWN"] = 0] = "OT_UNKNOWN";
  BinanceOrderType[BinanceOrderType["MARKET"] = 1] = "MARKET";
  BinanceOrderType[BinanceOrderType["LIMIT"] = 2] = "LIMIT";
  BinanceOrderType[BinanceOrderType["OT_RESERVED"] = 3] = "OT_RESERVED";
})(BinanceOrderType = exports.BinanceOrderType || (exports.BinanceOrderType = {}));
var BinanceOrderSide;
(function (BinanceOrderSide) {
  BinanceOrderSide[BinanceOrderSide["SIDE_UNKNOWN"] = 0] = "SIDE_UNKNOWN";
  BinanceOrderSide[BinanceOrderSide["BUY"] = 1] = "BUY";
  BinanceOrderSide[BinanceOrderSide["SELL"] = 2] = "SELL";
})(BinanceOrderSide = exports.BinanceOrderSide || (exports.BinanceOrderSide = {}));
var BinanceTimeInForce;
(function (BinanceTimeInForce) {
  BinanceTimeInForce[BinanceTimeInForce["TIF_UNKNOWN"] = 0] = "TIF_UNKNOWN";
  BinanceTimeInForce[BinanceTimeInForce["GTE"] = 1] = "GTE";
  BinanceTimeInForce[BinanceTimeInForce["TIF_RESERVED"] = 2] = "TIF_RESERVED";
  BinanceTimeInForce[BinanceTimeInForce["IOC"] = 3] = "IOC";
})(BinanceTimeInForce = exports.BinanceTimeInForce || (exports.BinanceTimeInForce = {}));
var Enum_InputScriptType;
(function (Enum_InputScriptType) {
  Enum_InputScriptType[Enum_InputScriptType["SPENDADDRESS"] = 0] = "SPENDADDRESS";
  Enum_InputScriptType[Enum_InputScriptType["SPENDMULTISIG"] = 1] = "SPENDMULTISIG";
  Enum_InputScriptType[Enum_InputScriptType["EXTERNAL"] = 2] = "EXTERNAL";
  Enum_InputScriptType[Enum_InputScriptType["SPENDWITNESS"] = 3] = "SPENDWITNESS";
  Enum_InputScriptType[Enum_InputScriptType["SPENDP2SHWITNESS"] = 4] = "SPENDP2SHWITNESS";
  Enum_InputScriptType[Enum_InputScriptType["SPENDTAPROOT"] = 5] = "SPENDTAPROOT";
})(Enum_InputScriptType = exports.Enum_InputScriptType || (exports.Enum_InputScriptType = {}));
var Enum_OutputScriptType;
(function (Enum_OutputScriptType) {
  Enum_OutputScriptType[Enum_OutputScriptType["PAYTOADDRESS"] = 0] = "PAYTOADDRESS";
  Enum_OutputScriptType[Enum_OutputScriptType["PAYTOSCRIPTHASH"] = 1] = "PAYTOSCRIPTHASH";
  Enum_OutputScriptType[Enum_OutputScriptType["PAYTOMULTISIG"] = 2] = "PAYTOMULTISIG";
  Enum_OutputScriptType[Enum_OutputScriptType["PAYTOOPRETURN"] = 3] = "PAYTOOPRETURN";
  Enum_OutputScriptType[Enum_OutputScriptType["PAYTOWITNESS"] = 4] = "PAYTOWITNESS";
  Enum_OutputScriptType[Enum_OutputScriptType["PAYTOP2SHWITNESS"] = 5] = "PAYTOP2SHWITNESS";
  Enum_OutputScriptType[Enum_OutputScriptType["PAYTOTAPROOT"] = 6] = "PAYTOTAPROOT";
})(Enum_OutputScriptType = exports.Enum_OutputScriptType || (exports.Enum_OutputScriptType = {}));
var DecredStakingSpendType;
(function (DecredStakingSpendType) {
  DecredStakingSpendType[DecredStakingSpendType["SSGen"] = 0] = "SSGen";
  DecredStakingSpendType[DecredStakingSpendType["SSRTX"] = 1] = "SSRTX";
})(DecredStakingSpendType = exports.DecredStakingSpendType || (exports.DecredStakingSpendType = {}));
var AmountUnit;
(function (AmountUnit) {
  AmountUnit[AmountUnit["BITCOIN"] = 0] = "BITCOIN";
  AmountUnit[AmountUnit["MILLIBITCOIN"] = 1] = "MILLIBITCOIN";
  AmountUnit[AmountUnit["MICROBITCOIN"] = 2] = "MICROBITCOIN";
  AmountUnit[AmountUnit["SATOSHI"] = 3] = "SATOSHI";
})(AmountUnit = exports.AmountUnit || (exports.AmountUnit = {}));
var Enum_RequestType;
(function (Enum_RequestType) {
  Enum_RequestType[Enum_RequestType["TXINPUT"] = 0] = "TXINPUT";
  Enum_RequestType[Enum_RequestType["TXOUTPUT"] = 1] = "TXOUTPUT";
  Enum_RequestType[Enum_RequestType["TXMETA"] = 2] = "TXMETA";
  Enum_RequestType[Enum_RequestType["TXFINISHED"] = 3] = "TXFINISHED";
  Enum_RequestType[Enum_RequestType["TXEXTRADATA"] = 4] = "TXEXTRADATA";
  Enum_RequestType[Enum_RequestType["TXORIGINPUT"] = 5] = "TXORIGINPUT";
  Enum_RequestType[Enum_RequestType["TXORIGOUTPUT"] = 6] = "TXORIGOUTPUT";
  Enum_RequestType[Enum_RequestType["TXPAYMENTREQ"] = 7] = "TXPAYMENTREQ";
})(Enum_RequestType = exports.Enum_RequestType || (exports.Enum_RequestType = {}));
var CardanoDerivationType;
(function (CardanoDerivationType) {
  CardanoDerivationType[CardanoDerivationType["LEDGER"] = 0] = "LEDGER";
  CardanoDerivationType[CardanoDerivationType["ICARUS"] = 1] = "ICARUS";
  CardanoDerivationType[CardanoDerivationType["ICARUS_TREZOR"] = 2] = "ICARUS_TREZOR";
})(CardanoDerivationType = exports.CardanoDerivationType || (exports.CardanoDerivationType = {}));
var CardanoAddressType;
(function (CardanoAddressType) {
  CardanoAddressType[CardanoAddressType["BASE"] = 0] = "BASE";
  CardanoAddressType[CardanoAddressType["BASE_SCRIPT_KEY"] = 1] = "BASE_SCRIPT_KEY";
  CardanoAddressType[CardanoAddressType["BASE_KEY_SCRIPT"] = 2] = "BASE_KEY_SCRIPT";
  CardanoAddressType[CardanoAddressType["BASE_SCRIPT_SCRIPT"] = 3] = "BASE_SCRIPT_SCRIPT";
  CardanoAddressType[CardanoAddressType["POINTER"] = 4] = "POINTER";
  CardanoAddressType[CardanoAddressType["POINTER_SCRIPT"] = 5] = "POINTER_SCRIPT";
  CardanoAddressType[CardanoAddressType["ENTERPRISE"] = 6] = "ENTERPRISE";
  CardanoAddressType[CardanoAddressType["ENTERPRISE_SCRIPT"] = 7] = "ENTERPRISE_SCRIPT";
  CardanoAddressType[CardanoAddressType["BYRON"] = 8] = "BYRON";
  CardanoAddressType[CardanoAddressType["REWARD"] = 14] = "REWARD";
  CardanoAddressType[CardanoAddressType["REWARD_SCRIPT"] = 15] = "REWARD_SCRIPT";
})(CardanoAddressType = exports.CardanoAddressType || (exports.CardanoAddressType = {}));
var CardanoNativeScriptType;
(function (CardanoNativeScriptType) {
  CardanoNativeScriptType[CardanoNativeScriptType["PUB_KEY"] = 0] = "PUB_KEY";
  CardanoNativeScriptType[CardanoNativeScriptType["ALL"] = 1] = "ALL";
  CardanoNativeScriptType[CardanoNativeScriptType["ANY"] = 2] = "ANY";
  CardanoNativeScriptType[CardanoNativeScriptType["N_OF_K"] = 3] = "N_OF_K";
  CardanoNativeScriptType[CardanoNativeScriptType["INVALID_BEFORE"] = 4] = "INVALID_BEFORE";
  CardanoNativeScriptType[CardanoNativeScriptType["INVALID_HEREAFTER"] = 5] = "INVALID_HEREAFTER";
})(CardanoNativeScriptType = exports.CardanoNativeScriptType || (exports.CardanoNativeScriptType = {}));
var CardanoNativeScriptHashDisplayFormat;
(function (CardanoNativeScriptHashDisplayFormat) {
  CardanoNativeScriptHashDisplayFormat[CardanoNativeScriptHashDisplayFormat["HIDE"] = 0] = "HIDE";
  CardanoNativeScriptHashDisplayFormat[CardanoNativeScriptHashDisplayFormat["BECH32"] = 1] = "BECH32";
  CardanoNativeScriptHashDisplayFormat[CardanoNativeScriptHashDisplayFormat["POLICY_ID"] = 2] = "POLICY_ID";
})(CardanoNativeScriptHashDisplayFormat = exports.CardanoNativeScriptHashDisplayFormat || (exports.CardanoNativeScriptHashDisplayFormat = {}));
var CardanoTxOutputSerializationFormat;
(function (CardanoTxOutputSerializationFormat) {
  CardanoTxOutputSerializationFormat[CardanoTxOutputSerializationFormat["ARRAY_LEGACY"] = 0] = "ARRAY_LEGACY";
  CardanoTxOutputSerializationFormat[CardanoTxOutputSerializationFormat["MAP_BABBAGE"] = 1] = "MAP_BABBAGE";
})(CardanoTxOutputSerializationFormat = exports.CardanoTxOutputSerializationFormat || (exports.CardanoTxOutputSerializationFormat = {}));
var CardanoCertificateType;
(function (CardanoCertificateType) {
  CardanoCertificateType[CardanoCertificateType["STAKE_REGISTRATION"] = 0] = "STAKE_REGISTRATION";
  CardanoCertificateType[CardanoCertificateType["STAKE_DEREGISTRATION"] = 1] = "STAKE_DEREGISTRATION";
  CardanoCertificateType[CardanoCertificateType["STAKE_DELEGATION"] = 2] = "STAKE_DELEGATION";
  CardanoCertificateType[CardanoCertificateType["STAKE_POOL_REGISTRATION"] = 3] = "STAKE_POOL_REGISTRATION";
})(CardanoCertificateType = exports.CardanoCertificateType || (exports.CardanoCertificateType = {}));
var CardanoPoolRelayType;
(function (CardanoPoolRelayType) {
  CardanoPoolRelayType[CardanoPoolRelayType["SINGLE_HOST_IP"] = 0] = "SINGLE_HOST_IP";
  CardanoPoolRelayType[CardanoPoolRelayType["SINGLE_HOST_NAME"] = 1] = "SINGLE_HOST_NAME";
  CardanoPoolRelayType[CardanoPoolRelayType["MULTIPLE_HOST_NAME"] = 2] = "MULTIPLE_HOST_NAME";
})(CardanoPoolRelayType = exports.CardanoPoolRelayType || (exports.CardanoPoolRelayType = {}));
var CardanoTxAuxiliaryDataSupplementType;
(function (CardanoTxAuxiliaryDataSupplementType) {
  CardanoTxAuxiliaryDataSupplementType[CardanoTxAuxiliaryDataSupplementType["NONE"] = 0] = "NONE";
  CardanoTxAuxiliaryDataSupplementType[CardanoTxAuxiliaryDataSupplementType["CVOTE_REGISTRATION_SIGNATURE"] = 1] = "CVOTE_REGISTRATION_SIGNATURE";
})(CardanoTxAuxiliaryDataSupplementType = exports.CardanoTxAuxiliaryDataSupplementType || (exports.CardanoTxAuxiliaryDataSupplementType = {}));
var CardanoCVoteRegistrationFormat;
(function (CardanoCVoteRegistrationFormat) {
  CardanoCVoteRegistrationFormat[CardanoCVoteRegistrationFormat["CIP15"] = 0] = "CIP15";
  CardanoCVoteRegistrationFormat[CardanoCVoteRegistrationFormat["CIP36"] = 1] = "CIP36";
})(CardanoCVoteRegistrationFormat = exports.CardanoCVoteRegistrationFormat || (exports.CardanoCVoteRegistrationFormat = {}));
var CardanoTxSigningMode;
(function (CardanoTxSigningMode) {
  CardanoTxSigningMode[CardanoTxSigningMode["ORDINARY_TRANSACTION"] = 0] = "ORDINARY_TRANSACTION";
  CardanoTxSigningMode[CardanoTxSigningMode["POOL_REGISTRATION_AS_OWNER"] = 1] = "POOL_REGISTRATION_AS_OWNER";
  CardanoTxSigningMode[CardanoTxSigningMode["MULTISIG_TRANSACTION"] = 2] = "MULTISIG_TRANSACTION";
  CardanoTxSigningMode[CardanoTxSigningMode["PLUTUS_TRANSACTION"] = 3] = "PLUTUS_TRANSACTION";
})(CardanoTxSigningMode = exports.CardanoTxSigningMode || (exports.CardanoTxSigningMode = {}));
var CardanoTxWitnessType;
(function (CardanoTxWitnessType) {
  CardanoTxWitnessType[CardanoTxWitnessType["BYRON_WITNESS"] = 0] = "BYRON_WITNESS";
  CardanoTxWitnessType[CardanoTxWitnessType["SHELLEY_WITNESS"] = 1] = "SHELLEY_WITNESS";
})(CardanoTxWitnessType = exports.CardanoTxWitnessType || (exports.CardanoTxWitnessType = {}));
var FailureType;
(function (FailureType) {
  FailureType[FailureType["Failure_UnexpectedMessage"] = 1] = "Failure_UnexpectedMessage";
  FailureType[FailureType["Failure_ButtonExpected"] = 2] = "Failure_ButtonExpected";
  FailureType[FailureType["Failure_DataError"] = 3] = "Failure_DataError";
  FailureType[FailureType["Failure_ActionCancelled"] = 4] = "Failure_ActionCancelled";
  FailureType[FailureType["Failure_PinExpected"] = 5] = "Failure_PinExpected";
  FailureType[FailureType["Failure_PinCancelled"] = 6] = "Failure_PinCancelled";
  FailureType[FailureType["Failure_PinInvalid"] = 7] = "Failure_PinInvalid";
  FailureType[FailureType["Failure_InvalidSignature"] = 8] = "Failure_InvalidSignature";
  FailureType[FailureType["Failure_ProcessError"] = 9] = "Failure_ProcessError";
  FailureType[FailureType["Failure_NotEnoughFunds"] = 10] = "Failure_NotEnoughFunds";
  FailureType[FailureType["Failure_NotInitialized"] = 11] = "Failure_NotInitialized";
  FailureType[FailureType["Failure_PinMismatch"] = 12] = "Failure_PinMismatch";
  FailureType[FailureType["Failure_WipeCodeMismatch"] = 13] = "Failure_WipeCodeMismatch";
  FailureType[FailureType["Failure_InvalidSession"] = 14] = "Failure_InvalidSession";
  FailureType[FailureType["Failure_FirmwareError"] = 99] = "Failure_FirmwareError";
})(FailureType = exports.FailureType || (exports.FailureType = {}));
var Enum_ButtonRequestType;
(function (Enum_ButtonRequestType) {
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_Other"] = 1] = "ButtonRequest_Other";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_FeeOverThreshold"] = 2] = "ButtonRequest_FeeOverThreshold";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_ConfirmOutput"] = 3] = "ButtonRequest_ConfirmOutput";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_ResetDevice"] = 4] = "ButtonRequest_ResetDevice";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_ConfirmWord"] = 5] = "ButtonRequest_ConfirmWord";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_WipeDevice"] = 6] = "ButtonRequest_WipeDevice";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_ProtectCall"] = 7] = "ButtonRequest_ProtectCall";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_SignTx"] = 8] = "ButtonRequest_SignTx";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_FirmwareCheck"] = 9] = "ButtonRequest_FirmwareCheck";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_Address"] = 10] = "ButtonRequest_Address";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_PublicKey"] = 11] = "ButtonRequest_PublicKey";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_MnemonicWordCount"] = 12] = "ButtonRequest_MnemonicWordCount";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_MnemonicInput"] = 13] = "ButtonRequest_MnemonicInput";
  Enum_ButtonRequestType[Enum_ButtonRequestType["_Deprecated_ButtonRequest_PassphraseType"] = 14] = "_Deprecated_ButtonRequest_PassphraseType";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_UnknownDerivationPath"] = 15] = "ButtonRequest_UnknownDerivationPath";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_RecoveryHomepage"] = 16] = "ButtonRequest_RecoveryHomepage";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_Success"] = 17] = "ButtonRequest_Success";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_Warning"] = 18] = "ButtonRequest_Warning";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_PassphraseEntry"] = 19] = "ButtonRequest_PassphraseEntry";
  Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_PinEntry"] = 20] = "ButtonRequest_PinEntry";
})(Enum_ButtonRequestType = exports.Enum_ButtonRequestType || (exports.Enum_ButtonRequestType = {}));
var Enum_PinMatrixRequestType;
(function (Enum_PinMatrixRequestType) {
  Enum_PinMatrixRequestType[Enum_PinMatrixRequestType["PinMatrixRequestType_Current"] = 1] = "PinMatrixRequestType_Current";
  Enum_PinMatrixRequestType[Enum_PinMatrixRequestType["PinMatrixRequestType_NewFirst"] = 2] = "PinMatrixRequestType_NewFirst";
  Enum_PinMatrixRequestType[Enum_PinMatrixRequestType["PinMatrixRequestType_NewSecond"] = 3] = "PinMatrixRequestType_NewSecond";
  Enum_PinMatrixRequestType[Enum_PinMatrixRequestType["PinMatrixRequestType_WipeCodeFirst"] = 4] = "PinMatrixRequestType_WipeCodeFirst";
  Enum_PinMatrixRequestType[Enum_PinMatrixRequestType["PinMatrixRequestType_WipeCodeSecond"] = 5] = "PinMatrixRequestType_WipeCodeSecond";
})(Enum_PinMatrixRequestType = exports.Enum_PinMatrixRequestType || (exports.Enum_PinMatrixRequestType = {}));
var DebugButton;
(function (DebugButton) {
  DebugButton[DebugButton["NO"] = 0] = "NO";
  DebugButton[DebugButton["YES"] = 1] = "YES";
  DebugButton[DebugButton["INFO"] = 2] = "INFO";
})(DebugButton = exports.DebugButton || (exports.DebugButton = {}));
var DebugPhysicalButton;
(function (DebugPhysicalButton) {
  DebugPhysicalButton[DebugPhysicalButton["LEFT_BTN"] = 0] = "LEFT_BTN";
  DebugPhysicalButton[DebugPhysicalButton["MIDDLE_BTN"] = 1] = "MIDDLE_BTN";
  DebugPhysicalButton[DebugPhysicalButton["RIGHT_BTN"] = 2] = "RIGHT_BTN";
})(DebugPhysicalButton = exports.DebugPhysicalButton || (exports.DebugPhysicalButton = {}));
var EthereumDefinitionType;
(function (EthereumDefinitionType) {
  EthereumDefinitionType[EthereumDefinitionType["NETWORK"] = 0] = "NETWORK";
  EthereumDefinitionType[EthereumDefinitionType["TOKEN"] = 1] = "TOKEN";
})(EthereumDefinitionType = exports.EthereumDefinitionType || (exports.EthereumDefinitionType = {}));
var EthereumDataType;
(function (EthereumDataType) {
  EthereumDataType[EthereumDataType["UINT"] = 1] = "UINT";
  EthereumDataType[EthereumDataType["INT"] = 2] = "INT";
  EthereumDataType[EthereumDataType["BYTES"] = 3] = "BYTES";
  EthereumDataType[EthereumDataType["STRING"] = 4] = "STRING";
  EthereumDataType[EthereumDataType["BOOL"] = 5] = "BOOL";
  EthereumDataType[EthereumDataType["ADDRESS"] = 6] = "ADDRESS";
  EthereumDataType[EthereumDataType["ARRAY"] = 7] = "ARRAY";
  EthereumDataType[EthereumDataType["STRUCT"] = 8] = "STRUCT";
})(EthereumDataType = exports.EthereumDataType || (exports.EthereumDataType = {}));
var Enum_BackupType;
(function (Enum_BackupType) {
  Enum_BackupType[Enum_BackupType["Bip39"] = 0] = "Bip39";
  Enum_BackupType[Enum_BackupType["Slip39_Basic"] = 1] = "Slip39_Basic";
  Enum_BackupType[Enum_BackupType["Slip39_Advanced"] = 2] = "Slip39_Advanced";
})(Enum_BackupType = exports.Enum_BackupType || (exports.Enum_BackupType = {}));
var Enum_SafetyCheckLevel;
(function (Enum_SafetyCheckLevel) {
  Enum_SafetyCheckLevel[Enum_SafetyCheckLevel["Strict"] = 0] = "Strict";
  Enum_SafetyCheckLevel[Enum_SafetyCheckLevel["PromptAlways"] = 1] = "PromptAlways";
  Enum_SafetyCheckLevel[Enum_SafetyCheckLevel["PromptTemporarily"] = 2] = "PromptTemporarily";
})(Enum_SafetyCheckLevel = exports.Enum_SafetyCheckLevel || (exports.Enum_SafetyCheckLevel = {}));
var Enum_HomescreenFormat;
(function (Enum_HomescreenFormat) {
  Enum_HomescreenFormat[Enum_HomescreenFormat["Toif"] = 1] = "Toif";
  Enum_HomescreenFormat[Enum_HomescreenFormat["Jpeg"] = 2] = "Jpeg";
  Enum_HomescreenFormat[Enum_HomescreenFormat["ToiG"] = 3] = "ToiG";
})(Enum_HomescreenFormat = exports.Enum_HomescreenFormat || (exports.Enum_HomescreenFormat = {}));
var Enum_Capability;
(function (Enum_Capability) {
  Enum_Capability[Enum_Capability["Capability_Bitcoin"] = 1] = "Capability_Bitcoin";
  Enum_Capability[Enum_Capability["Capability_Bitcoin_like"] = 2] = "Capability_Bitcoin_like";
  Enum_Capability[Enum_Capability["Capability_Binance"] = 3] = "Capability_Binance";
  Enum_Capability[Enum_Capability["Capability_Cardano"] = 4] = "Capability_Cardano";
  Enum_Capability[Enum_Capability["Capability_Crypto"] = 5] = "Capability_Crypto";
  Enum_Capability[Enum_Capability["Capability_EOS"] = 6] = "Capability_EOS";
  Enum_Capability[Enum_Capability["Capability_Ethereum"] = 7] = "Capability_Ethereum";
  Enum_Capability[Enum_Capability["Capability_Lisk"] = 8] = "Capability_Lisk";
  Enum_Capability[Enum_Capability["Capability_Monero"] = 9] = "Capability_Monero";
  Enum_Capability[Enum_Capability["Capability_NEM"] = 10] = "Capability_NEM";
  Enum_Capability[Enum_Capability["Capability_Ripple"] = 11] = "Capability_Ripple";
  Enum_Capability[Enum_Capability["Capability_Stellar"] = 12] = "Capability_Stellar";
  Enum_Capability[Enum_Capability["Capability_Tezos"] = 13] = "Capability_Tezos";
  Enum_Capability[Enum_Capability["Capability_U2F"] = 14] = "Capability_U2F";
  Enum_Capability[Enum_Capability["Capability_Shamir"] = 15] = "Capability_Shamir";
  Enum_Capability[Enum_Capability["Capability_ShamirGroups"] = 16] = "Capability_ShamirGroups";
  Enum_Capability[Enum_Capability["Capability_PassphraseEntry"] = 17] = "Capability_PassphraseEntry";
})(Enum_Capability = exports.Enum_Capability || (exports.Enum_Capability = {}));
var SdProtectOperationType;
(function (SdProtectOperationType) {
  SdProtectOperationType[SdProtectOperationType["DISABLE"] = 0] = "DISABLE";
  SdProtectOperationType[SdProtectOperationType["ENABLE"] = 1] = "ENABLE";
  SdProtectOperationType[SdProtectOperationType["REFRESH"] = 2] = "REFRESH";
})(SdProtectOperationType = exports.SdProtectOperationType || (exports.SdProtectOperationType = {}));
var RecoveryDeviceType;
(function (RecoveryDeviceType) {
  RecoveryDeviceType[RecoveryDeviceType["RecoveryDeviceType_ScrambledWords"] = 0] = "RecoveryDeviceType_ScrambledWords";
  RecoveryDeviceType[RecoveryDeviceType["RecoveryDeviceType_Matrix"] = 1] = "RecoveryDeviceType_Matrix";
})(RecoveryDeviceType = exports.RecoveryDeviceType || (exports.RecoveryDeviceType = {}));
var Enum_WordRequestType;
(function (Enum_WordRequestType) {
  Enum_WordRequestType[Enum_WordRequestType["WordRequestType_Plain"] = 0] = "WordRequestType_Plain";
  Enum_WordRequestType[Enum_WordRequestType["WordRequestType_Matrix9"] = 1] = "WordRequestType_Matrix9";
  Enum_WordRequestType[Enum_WordRequestType["WordRequestType_Matrix6"] = 2] = "WordRequestType_Matrix6";
})(Enum_WordRequestType = exports.Enum_WordRequestType || (exports.Enum_WordRequestType = {}));
var MoneroNetworkType;
(function (MoneroNetworkType) {
  MoneroNetworkType[MoneroNetworkType["MAINNET"] = 0] = "MAINNET";
  MoneroNetworkType[MoneroNetworkType["TESTNET"] = 1] = "TESTNET";
  MoneroNetworkType[MoneroNetworkType["STAGENET"] = 2] = "STAGENET";
  MoneroNetworkType[MoneroNetworkType["FAKECHAIN"] = 3] = "FAKECHAIN";
})(MoneroNetworkType = exports.MoneroNetworkType || (exports.MoneroNetworkType = {}));
var NEMMosaicLevy;
(function (NEMMosaicLevy) {
  NEMMosaicLevy[NEMMosaicLevy["MosaicLevy_Absolute"] = 1] = "MosaicLevy_Absolute";
  NEMMosaicLevy[NEMMosaicLevy["MosaicLevy_Percentile"] = 2] = "MosaicLevy_Percentile";
})(NEMMosaicLevy = exports.NEMMosaicLevy || (exports.NEMMosaicLevy = {}));
var NEMSupplyChangeType;
(function (NEMSupplyChangeType) {
  NEMSupplyChangeType[NEMSupplyChangeType["SupplyChange_Increase"] = 1] = "SupplyChange_Increase";
  NEMSupplyChangeType[NEMSupplyChangeType["SupplyChange_Decrease"] = 2] = "SupplyChange_Decrease";
})(NEMSupplyChangeType = exports.NEMSupplyChangeType || (exports.NEMSupplyChangeType = {}));
var NEMModificationType;
(function (NEMModificationType) {
  NEMModificationType[NEMModificationType["CosignatoryModification_Add"] = 1] = "CosignatoryModification_Add";
  NEMModificationType[NEMModificationType["CosignatoryModification_Delete"] = 2] = "CosignatoryModification_Delete";
})(NEMModificationType = exports.NEMModificationType || (exports.NEMModificationType = {}));
var NEMImportanceTransferMode;
(function (NEMImportanceTransferMode) {
  NEMImportanceTransferMode[NEMImportanceTransferMode["ImportanceTransfer_Activate"] = 1] = "ImportanceTransfer_Activate";
  NEMImportanceTransferMode[NEMImportanceTransferMode["ImportanceTransfer_Deactivate"] = 2] = "ImportanceTransfer_Deactivate";
})(NEMImportanceTransferMode = exports.NEMImportanceTransferMode || (exports.NEMImportanceTransferMode = {}));
var StellarAssetType;
(function (StellarAssetType) {
  StellarAssetType[StellarAssetType["NATIVE"] = 0] = "NATIVE";
  StellarAssetType[StellarAssetType["ALPHANUM4"] = 1] = "ALPHANUM4";
  StellarAssetType[StellarAssetType["ALPHANUM12"] = 2] = "ALPHANUM12";
})(StellarAssetType = exports.StellarAssetType || (exports.StellarAssetType = {}));
var StellarMemoType;
(function (StellarMemoType) {
  StellarMemoType[StellarMemoType["NONE"] = 0] = "NONE";
  StellarMemoType[StellarMemoType["TEXT"] = 1] = "TEXT";
  StellarMemoType[StellarMemoType["ID"] = 2] = "ID";
  StellarMemoType[StellarMemoType["HASH"] = 3] = "HASH";
  StellarMemoType[StellarMemoType["RETURN"] = 4] = "RETURN";
})(StellarMemoType = exports.StellarMemoType || (exports.StellarMemoType = {}));
var StellarSignerType;
(function (StellarSignerType) {
  StellarSignerType[StellarSignerType["ACCOUNT"] = 0] = "ACCOUNT";
  StellarSignerType[StellarSignerType["PRE_AUTH"] = 1] = "PRE_AUTH";
  StellarSignerType[StellarSignerType["HASH"] = 2] = "HASH";
})(StellarSignerType = exports.StellarSignerType || (exports.StellarSignerType = {}));
var TezosContractType;
(function (TezosContractType) {
  TezosContractType[TezosContractType["Implicit"] = 0] = "Implicit";
  TezosContractType[TezosContractType["Originated"] = 1] = "Originated";
})(TezosContractType = exports.TezosContractType || (exports.TezosContractType = {}));
var TezosBallotType;
(function (TezosBallotType) {
  TezosBallotType[TezosBallotType["Yay"] = 0] = "Yay";
  TezosBallotType[TezosBallotType["Nay"] = 1] = "Nay";
  TezosBallotType[TezosBallotType["Pass"] = 2] = "Pass";
})(TezosBallotType = exports.TezosBallotType || (exports.TezosBallotType = {}));

/***/ }),

/***/ 4109:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TRANSPORT = exports.ACTION_TIMEOUT = exports.TREZOR_USB_DESCRIPTORS = exports.T1_HID_VENDOR = exports.ENDPOINT_ID = exports.INTERFACE_ID = exports.CONFIGURATION_ID = void 0;
exports.CONFIGURATION_ID = 1;
exports.INTERFACE_ID = 0;
exports.ENDPOINT_ID = 1;
exports.T1_HID_VENDOR = 0x534c;
exports.TREZOR_USB_DESCRIPTORS = [{
  vendorId: 0x534c,
  productId: 0x0001
}, {
  vendorId: 0x1209,
  productId: 0x53c0
}, {
  vendorId: 0x1209,
  productId: 0x53c1
}];
exports.ACTION_TIMEOUT = 10000;
exports.TRANSPORT = {
  START: 'transport-start',
  ERROR: 'transport-error',
  UPDATE: 'transport-update',
  DISABLE_WEBUSB: 'transport-disable_webusb',
  REQUEST_DEVICE: 'transport-request_device'
};

/***/ }),

/***/ 3746:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.arrayDistinct = void 0;
const arrayDistinct = (item, index, self) => self.indexOf(item) === index;
exports.arrayDistinct = arrayDistinct;

/***/ }),

/***/ 3451:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.arrayPartition = void 0;
const arrayPartition = (array, condition) => array.reduce(([pass, fail], elem) => condition(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]], [[], []]);
exports.arrayPartition = arrayPartition;

/***/ }),

/***/ 9102:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.arrayShuffle = void 0;
const arrayShuffle = array => {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
exports.arrayShuffle = arrayShuffle;

/***/ }),

/***/ 7060:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.arrayToDictionary = void 0;
const validateKey = key => {
  if (['string', 'number'].includes(typeof key)) {
    return true;
  }
  return false;
};
const arrayToDictionary = (array, getKey, multiple) => multiple ? array.reduce((prev, cur) => {
  var _a;
  const key = getKey(cur);
  if (validateKey(key)) {
    return Object.assign(Object.assign({}, prev), {
      [key]: [...((_a = prev[key]) !== null && _a !== void 0 ? _a : []), cur]
    });
  }
  return prev;
}, {}) : array.reduce((prev, cur) => {
  const key = getKey(cur);
  if (validateKey(key)) {
    return Object.assign(Object.assign({}, prev), {
      [key]: cur
    });
  }
  return prev;
}, {});
exports.arrayToDictionary = arrayToDictionary;

/***/ }),

/***/ 5949:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getChunkSize = exports.reverseBuffer = void 0;
const reverseBuffer = src => {
  if (src.length < 1) return src;
  const buffer = Buffer.alloc(src.length);
  let j = buffer.length - 1;
  for (let i = 0; i < buffer.length / 2; i++) {
    buffer[i] = src[j];
    buffer[j] = src[i];
    j--;
  }
  return buffer;
};
exports.reverseBuffer = reverseBuffer;
const getChunkSize = n => {
  const buf = Buffer.allocUnsafe(1);
  buf.writeUInt8(n);
  return buf;
};
exports.getChunkSize = getChunkSize;

/***/ }),

/***/ 7534:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bytesToHumanReadable = void 0;
const units = ['B', 'KB', 'MB', 'GB', 'TB'];
const bytesToHumanReadable = bytes => {
  let size = Math.abs(bytes);
  let i = 0;
  while (size >= 1024 || i >= units.length) {
    size /= 1024;
    i++;
  }
  return `${size.toFixed(1)} ${units[i]}`;
};
exports.bytesToHumanReadable = bytesToHumanReadable;

/***/ }),

/***/ 5970:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.capitalizeFirstLetter = void 0;
const capitalizeFirstLetter = s => s.charAt(0).toUpperCase() + s.slice(1);
exports.capitalizeFirstLetter = capitalizeFirstLetter;

/***/ }),

/***/ 8441:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cloneObject = void 0;
const cloneObject = obj => {
  const jsonString = JSON.stringify(obj);
  if (jsonString === undefined) {
    return obj;
  }
  return JSON.parse(jsonString);
};
exports.cloneObject = cloneObject;

/***/ }),

/***/ 3940:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.countBytesInString = void 0;
const countBytesInString = input => encodeURI(input).split(/%..|./).length - 1;
exports.countBytesInString = countBytesInString;

/***/ }),

/***/ 9899:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createCooldown = void 0;
const createCooldown = cooldownMs => {
  let last = 0;
  return () => {
    const now = Date.now();
    if (now - last >= cooldownMs) {
      last = now;
      return true;
    }
    return false;
  };
};
exports.createCooldown = createCooldown;

/***/ }),

/***/ 7686:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createDeferred = void 0;
const createDeferred = id => {
  let localResolve = () => {};
  let localReject = () => {};
  const promise = new Promise((resolve, reject) => {
    localResolve = resolve;
    localReject = reject;
  });
  return {
    id,
    resolve: localResolve,
    reject: localReject,
    promise
  };
};
exports.createDeferred = createDeferred;

/***/ }),

/***/ 1975:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createTimeoutPromise = void 0;
const createTimeoutPromise = timeout => new Promise(resolve => setTimeout(resolve, timeout));
exports.createTimeoutPromise = createTimeoutPromise;

/***/ }),

/***/ 7546:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getValueByKey = exports.getKeyByValue = void 0;
function getKeyByValue(obj, value) {
  return obj && Object.keys(obj).find(x => obj[x] === value);
}
exports.getKeyByValue = getKeyByValue;
function getValueByKey(obj, enumKey) {
  const key = obj && Object.keys(obj).find(x => x === enumKey);
  return key && obj[key];
}
exports.getValueByKey = getValueByKey;

/***/ }),

/***/ 6725:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getLocaleSeparators = void 0;
const getLocaleSeparators = locale => {
  var _a, _b;
  const numberFormat = new Intl.NumberFormat(locale);
  const parts = numberFormat.formatToParts(10000.1);
  const decimalSeparator = (_a = parts.find(({
    type
  }) => type === 'decimal')) === null || _a === void 0 ? void 0 : _a.value;
  const thousandsSeparator = (_b = parts.find(({
    type
  }) => type === 'group')) === null || _b === void 0 ? void 0 : _b.value;
  return {
    decimalSeparator,
    thousandsSeparator
  };
};
exports.getLocaleSeparators = getLocaleSeparators;

/***/ }),

/***/ 2442:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getNumberFromPixelString = void 0;
const getNumberFromPixelString = size => parseInt(size.replace('px', ''), 10);
exports.getNumberFromPixelString = getNumberFromPixelString;

/***/ }),

/***/ 6855:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getRandomNumberInRange = void 0;
const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
exports.getRandomNumberInRange = getRandomNumberInRange;

/***/ }),

/***/ 704:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getSynchronize = void 0;
const getSynchronize = () => {
  let lock;
  return action => {
    const newLock = (lock !== null && lock !== void 0 ? lock : Promise.resolve()).catch(() => {}).then(action).finally(() => {
      if (lock === newLock) {
        lock = undefined;
      }
    });
    lock = newLock;
    return lock;
  };
};
exports.getSynchronize = getSynchronize;

/***/ }),

/***/ 7237:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getWeakRandomId = void 0;
const getWeakRandomId = length => {
  let id = '';
  const list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    id += list.charAt(Math.floor(Math.random() * list.length));
  }
  return id;
};
exports.getWeakRandomId = getWeakRandomId;

/***/ }),

/***/ 7292:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hasUppercaseLetter = void 0;
const HAS_UPPERCASE_LATER_REGEXP = new RegExp('^(.*[A-Z].*)$');
const hasUppercaseLetter = value => HAS_UPPERCASE_LATER_REGEXP.test(value);
exports.hasUppercaseLetter = hasUppercaseLetter;

/***/ }),

/***/ 4542:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.xssFilters = exports.versionUtils = exports.enumUtils = exports.bufferUtils = void 0;
__exportStar(__webpack_require__(3746), exports);
__exportStar(__webpack_require__(3451), exports);
__exportStar(__webpack_require__(9102), exports);
__exportStar(__webpack_require__(7060), exports);
exports.bufferUtils = __importStar(__webpack_require__(5949));
__exportStar(__webpack_require__(7534), exports);
__exportStar(__webpack_require__(5970), exports);
__exportStar(__webpack_require__(8441), exports);
__exportStar(__webpack_require__(3940), exports);
__exportStar(__webpack_require__(9899), exports);
__exportStar(__webpack_require__(7686), exports);
__exportStar(__webpack_require__(1975), exports);
exports.enumUtils = __importStar(__webpack_require__(7546));
__exportStar(__webpack_require__(2442), exports);
__exportStar(__webpack_require__(6855), exports);
__exportStar(__webpack_require__(704), exports);
__exportStar(__webpack_require__(7237), exports);
__exportStar(__webpack_require__(7292), exports);
__exportStar(__webpack_require__(8003), exports);
__exportStar(__webpack_require__(1646), exports);
__exportStar(__webpack_require__(144), exports);
__exportStar(__webpack_require__(2210), exports);
__exportStar(__webpack_require__(2985), exports);
__exportStar(__webpack_require__(6526), exports);
__exportStar(__webpack_require__(8389), exports);
__exportStar(__webpack_require__(8416), exports);
__exportStar(__webpack_require__(9625), exports);
__exportStar(__webpack_require__(4722), exports);
__exportStar(__webpack_require__(1847), exports);
__exportStar(__webpack_require__(1566), exports);
__exportStar(__webpack_require__(8061), exports);
__exportStar(__webpack_require__(6140), exports);
__exportStar(__webpack_require__(5200), exports);
exports.versionUtils = __importStar(__webpack_require__(8628));
exports.xssFilters = __importStar(__webpack_require__(9672));
__exportStar(__webpack_require__(6725), exports);

/***/ }),

/***/ 8003:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isAscii = void 0;
function isAscii(value) {
  if (!value) return true;
  return /^[\x00-\x7F]*$/.test(value);
}
exports.isAscii = isAscii;

/***/ }),

/***/ 1646:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isHex = void 0;
const isHex = str => {
  const regExp = /^(0x|0X)?[0-9A-Fa-f]+$/g;
  return regExp.test(str);
};
exports.isHex = isHex;

/***/ }),

/***/ 144:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isNotUndefined = void 0;
const isNotUndefined = item => typeof item !== 'undefined';
exports.isNotUndefined = isNotUndefined;

/***/ }),

/***/ 2210:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isUrl = void 0;
const URL_REGEXP = /^(http|ws)s?:\/\/[a-z0-9]([a-z0-9.-]+)?(:[0-9]{1,5})?((\/)?(([a-z0-9-_])+(\/)?)+)$/i;
const isUrl = value => URL_REGEXP.test(value);
exports.isUrl = isUrl;

/***/ }),

/***/ 2985:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.mergeDeepObject = void 0;
const isObject = obj => {
  if (typeof obj === 'object' && obj !== null) {
    if (typeof Object.getPrototypeOf === 'function') {
      const prototype = Object.getPrototypeOf(obj);
      return prototype === Object.prototype || prototype === null;
    }
    return Object.prototype.toString.call(obj) === '[object Object]';
  }
  return false;
};
const mergeDeepObject = (...objects) => objects.reduce((result, current) => {
  if (Array.isArray(current)) {
    throw new TypeError('Arguments provided to ts-deepmerge must be objects, not arrays.');
  }
  Object.keys(current).forEach(key => {
    if (['__proto__', 'constructor', 'prototype'].includes(key)) {
      return;
    }
    if (Array.isArray(result[key]) && Array.isArray(current[key])) {
      result[key] = exports.mergeDeepObject.options.mergeArrays ? Array.from(new Set(result[key].concat(current[key]))) : current[key];
    } else if (isObject(result[key]) && isObject(current[key])) {
      result[key] = (0, exports.mergeDeepObject)(result[key], current[key]);
    } else {
      result[key] = current[key];
    }
  });
  return result;
}, {});
exports.mergeDeepObject = mergeDeepObject;
const defaultOptions = {
  mergeArrays: true
};
exports.mergeDeepObject.options = defaultOptions;
exports.mergeDeepObject.withOptions = (options, ...objects) => {
  exports.mergeDeepObject.options = Object.assign({
    mergeArrays: true
  }, options);
  const result = (0, exports.mergeDeepObject)(...objects);
  exports.mergeDeepObject.options = defaultOptions;
  return result;
};

/***/ }),

/***/ 6526:
/***/ (function(__unused_webpack_module, exports) {



var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.objectPartition = void 0;
const objectPartition = (obj, keys) => keys.reduce(([included, excluded], key) => {
  const _a = excluded,
    _b = key,
    value = _a[_b],
    rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
  return typeof value !== 'undefined' ? [Object.assign(Object.assign({}, included), {
    [key]: value
  }), rest] : [included, excluded];
}, [{}, obj]);
exports.objectPartition = objectPartition;

/***/ }),

/***/ 8389:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseElectrumUrl = void 0;
const ELECTRUM_URL_REGEX = /^(?:([a-zA-Z0-9.-]+)|\[([a-f0-9:]+)\]):([0-9]{1,5}):([ts])$/;
const parseElectrumUrl = url => {
  var _a;
  const match = url.match(ELECTRUM_URL_REGEX);
  if (!match) return undefined;
  return {
    host: (_a = match[1]) !== null && _a !== void 0 ? _a : match[2],
    port: Number.parseInt(match[3], 10),
    protocol: match[4]
  };
};
exports.parseElectrumUrl = parseElectrumUrl;

/***/ }),

/***/ 8416:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseHostname = void 0;
const HOSTNAME_REGEX = /^([a-z0-9.+-]+:\/\/)?([a-z0-9.-]+)([:/][^:/]+)*\/?$/i;
const parseHostname = url => {
  var _a, _b;
  return (_b = (_a = url.match(HOSTNAME_REGEX)) === null || _a === void 0 ? void 0 : _a[2]) === null || _b === void 0 ? void 0 : _b.toLowerCase();
};
exports.parseHostname = parseHostname;

/***/ }),

/***/ 9625:
/***/ (function(__unused_webpack_module, exports) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.promiseAllSequence = void 0;
const promiseAllSequence = actions => __awaiter(void 0, void 0, void 0, function* () {
  const results = [];
  for (let i = 0; i < actions.length; ++i) {
    const result = yield actions[i]();
    results.push(result);
  }
  return results;
});
exports.promiseAllSequence = promiseAllSequence;

/***/ }),

/***/ 4722:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.redactUserPathFromString = exports.startOfUserPathRegex = void 0;
exports.startOfUserPathRegex = /([/\\][Uu]sers[/\\]{1,4})([^"^'^[^\]^/^\\]*)/g;
const redactUserPathFromString = text => text.replace(exports.startOfUserPathRegex, '$1[*]');
exports.redactUserPathFromString = redactUserPathFromString;

/***/ }),

/***/ 1847:
/***/ (function(__unused_webpack_module, exports) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.scheduleAction = void 0;
const isArray = attempts => Array.isArray(attempts);
const abortedBySignal = () => new Error('Aborted by signal');
const abortedByDeadline = () => new Error('Aborted by deadline');
const abortedByTimeout = () => new Error('Aborted by timeout');
const resolveAfterMs = (ms, clear) => new Promise((resolve, reject) => {
  if (clear.aborted) return reject();
  if (ms === undefined) return resolve();
  const timeout = setTimeout(resolve, ms);
  const onClear = () => {
    clearTimeout(timeout);
    clear.removeEventListener('abort', onClear);
    reject();
  };
  clear.addEventListener('abort', onClear);
});
const rejectAfterMs = (ms, reason, clear) => new Promise((_, reject) => {
  if (clear.aborted) return reject();
  const timeout = ms !== undefined ? setTimeout(() => reject(reason()), ms) : undefined;
  const onClear = () => {
    clearTimeout(timeout);
    clear.removeEventListener('abort', onClear);
    reject();
  };
  clear.addEventListener('abort', onClear);
});
const rejectWhenAborted = (signal, clear) => new Promise((_, reject) => {
  if (clear.aborted) return reject();
  if (signal === null || signal === void 0 ? void 0 : signal.aborted) return reject(abortedBySignal());
  const onAbort = () => reject(abortedBySignal());
  signal === null || signal === void 0 ? void 0 : signal.addEventListener('abort', onAbort);
  const onClear = () => {
    signal === null || signal === void 0 ? void 0 : signal.removeEventListener('abort', onAbort);
    clear.removeEventListener('abort', onClear);
    reject();
  };
  clear.addEventListener('abort', onClear);
});
const resolveAction = (action, clear) => __awaiter(void 0, void 0, void 0, function* () {
  const aborter = new AbortController();
  const onClear = () => aborter.abort();
  if (clear.aborted) onClear();
  clear.addEventListener('abort', onClear);
  try {
    return yield new Promise(resolve => resolve(action(aborter.signal)));
  } finally {
    clear.removeEventListener('abort', onClear);
  }
});
const attemptLoop = (attempts, attempt, failure, clear) => __awaiter(void 0, void 0, void 0, function* () {
  for (let a = 0; a < attempts - 1; a++) {
    if (clear.aborted) break;
    const aborter = new AbortController();
    const onClear = () => aborter.abort();
    clear.addEventListener('abort', onClear);
    try {
      return yield attempt(a, aborter.signal);
    } catch (_a) {
      onClear();
      yield failure(a);
    } finally {
      clear.removeEventListener('abort', onClear);
    }
  }
  return clear.aborted ? Promise.reject() : attempt(attempts - 1, clear);
});
const scheduleAction = (action, params) => __awaiter(void 0, void 0, void 0, function* () {
  const {
    signal,
    delay,
    attempts,
    timeout,
    deadline,
    gap
  } = params;
  const deadlineMs = deadline && deadline - Date.now();
  const attemptCount = isArray(attempts) ? attempts.length : attempts !== null && attempts !== void 0 ? attempts : deadline ? Infinity : 1;
  const clearAborter = new AbortController();
  const clear = clearAborter.signal;
  const getParams = isArray(attempts) ? attempt => attempts[attempt] : () => ({
    timeout,
    gap
  });
  try {
    return yield Promise.race([rejectWhenAborted(signal, clear), rejectAfterMs(deadlineMs, abortedByDeadline, clear), resolveAfterMs(delay, clear).then(() => attemptLoop(attemptCount, (attempt, abort) => Promise.race([rejectAfterMs(getParams(attempt).timeout, abortedByTimeout, clear), resolveAction(action, abort)]), attempt => {
      var _a;
      return resolveAfterMs((_a = getParams(attempt).gap) !== null && _a !== void 0 ? _a : 0, clear);
    }, clear))]);
  } finally {
    clearAborter.abort();
  }
});
exports.scheduleAction = scheduleAction;

/***/ }),

/***/ 1566:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.throwError = void 0;
const throwError = reason => {
  throw new Error(reason);
};
exports.throwError = throwError;

/***/ }),

/***/ 6140:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.topologicalSort = void 0;
const arrayPartition_1 = __webpack_require__(3451);
const topologicalSort = (elements, precedes, tie) => {
  const result = [];
  const filterRoots = verts => (0, arrayPartition_1.arrayPartition)(verts, succ => !verts.some(pred => precedes(pred, succ)));
  let elem = elements;
  while (elem.length) {
    const [roots, rest] = filterRoots(elem);
    if (!roots.length) throw new Error('Cycle detected');
    result.push(...(tie ? roots.sort(tie) : roots));
    elem = rest;
  }
  return result;
};
exports.topologicalSort = topologicalSort;

/***/ }),

/***/ 8061:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.truncateMiddle = void 0;
const truncateMiddle = (text, startChars, endChars) => {
  if (text.length <= startChars + endChars) return text;
  const start = text.substring(0, startChars);
  const end = text.substring(text.length - endChars, text.length);
  return `${start}…${end}`;
};
exports.truncateMiddle = truncateMiddle;

/***/ }),

/***/ 5200:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.urlToOnion = void 0;
const urlToOnion = (url, onionDomains) => {
  var _a;
  const [, protocol, subdomain, domain, rest] = (_a = url.match(/^(http|ws)s?:\/\/([^:/]+\.)?([^/.]+\.[^/.]+)(\/.*)?$/i)) !== null && _a !== void 0 ? _a : [];
  if (!domain || !onionDomains[domain]) return;
  return `${protocol}://${subdomain !== null && subdomain !== void 0 ? subdomain : ''}${onionDomains[domain]}${rest !== null && rest !== void 0 ? rest : ''}`;
};
exports.urlToOnion = urlToOnion;

/***/ }),

/***/ 8628:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.normalizeVersion = exports.isNewerOrEqual = exports.isEqual = exports.isNewer = exports.isVersionArray = void 0;
const isVersionArray = arr => {
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length !== 3) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    const versionNumber = arr[i];
    if (typeof versionNumber !== 'number' || versionNumber < 0) {
      return false;
    }
  }
  return true;
};
exports.isVersionArray = isVersionArray;
const parse = versionArr => ({
  major: versionArr[0],
  minor: versionArr[1],
  patch: versionArr[2]
});
const split = version => {
  const arr = version.split('.').map(v => Number(v));
  if (!(0, exports.isVersionArray)(arr)) {
    throw new Error('version string is in wrong format');
  }
  return arr;
};
const versionToString = arr => `${arr[0]}.${arr[1]}.${arr[2]}`;
const isNewer = (versionX, versionY) => {
  const parsedX = parse(typeof versionX === 'string' ? split(versionX) : versionX);
  const parsedY = parse(typeof versionY === 'string' ? split(versionY) : versionY);
  if (parsedX.major - parsedY.major !== 0) {
    return parsedX.major > parsedY.major;
  }
  if (parsedX.minor - parsedY.minor !== 0) {
    return parsedX.minor > parsedY.minor;
  }
  if (parsedX.patch - parsedY.patch !== 0) {
    return parsedX.patch > parsedY.patch;
  }
  return false;
};
exports.isNewer = isNewer;
const isEqual = (versionX, versionY) => {
  const strX = typeof versionX === 'string' ? versionX : versionToString(versionX);
  const strY = typeof versionY === 'string' ? versionY : versionToString(versionY);
  return strX === strY;
};
exports.isEqual = isEqual;
const isNewerOrEqual = (versionX, versionY) => (0, exports.isNewer)(versionX, versionY) || (0, exports.isEqual)(versionX, versionY);
exports.isNewerOrEqual = isNewerOrEqual;
const normalizeVersion = version => version.replace(/\b0+(\d)/g, '$1');
exports.normalizeVersion = normalizeVersion;

/***/ }),

/***/ 9672:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.inDoubleQuotes = exports.inSingleQuotes = exports.inHTML = void 0;
const LT = /</g;
const SQUOT = /'/g;
const QUOT = /"/g;
const inHTML = value => value.replace(LT, '&lt;');
exports.inHTML = inHTML;
const inSingleQuotes = value => value.replace(SQUOT, '&#39;');
exports.inSingleQuotes = inSingleQuotes;
const inDoubleQuotes = value => value.replace(QUOT, '&quot;');
exports.inDoubleQuotes = inDoubleQuotes;

/***/ }),

/***/ 2699:
/***/ ((module) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ 2970:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: ../../node_modules/events/events.js
var events = __webpack_require__(2699);
var events_default = /*#__PURE__*/__webpack_require__.n(events);
// EXTERNAL MODULE: ../connect/lib/exports.js
var lib_exports = __webpack_require__(654);
// EXTERNAL MODULE: ../connect/lib/factory.js
var factory = __webpack_require__(3329);
// EXTERNAL MODULE: ../connect/lib/utils/debug.js
var debug = __webpack_require__(6521);
// EXTERNAL MODULE: ../connect/lib/data/config.js
var config = __webpack_require__(5729);
// EXTERNAL MODULE: ../utils/lib/index.js
var lib = __webpack_require__(4542);
// EXTERNAL MODULE: ../connect/lib/utils/urlUtils.js
var urlUtils = __webpack_require__(3163);
;// CONCATENATED MODULE: ./src/iframe/inlineStyles.ts
// origin: https://github.com/trezor/connect/blob/develop/src/js/iframe/inline-styles.js

const css = '.trezorconnect-container{position:fixed!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important;z-index:10000!important;width:100%!important;height:100%!important;top:0!important;left:0!important;background:rgba(0,0,0,.35)!important;overflow:auto!important;padding:20px!important;margin:0!important}.trezorconnect-container .trezorconnect-window{position:relative!important;display:block!important;width:370px!important;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif!important;margin:auto!important;border-radius:3px!important;background-color:#fff!important;text-align:center!important;overflow:hidden!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head{text-align:left;padding:12px 24px!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-logo{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close{cursor:pointer!important;height:24px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close svg{fill:#757575;-webkit-transition:fill .3s ease-in-out!important;transition:fill .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close:hover svg{fill:#494949}.trezorconnect-container .trezorconnect-window .trezorconnect-body{padding:24px 24px 32px!important;background:#FBFBFB!important;border-top:1px solid #EBEBEB}.trezorconnect-container .trezorconnect-window .trezorconnect-body h3{color:#505050!important;font-size:16px!important;font-weight:500!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body p{margin:8px 0 24px!important;font-weight:400!important;color:#A9A9A9!important;font-size:12px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button{width:100%!important;padding:12px 24px!important;margin:0!important;border-radius:3px!important;font-size:14px!important;font-weight:300!important;cursor:pointer!important;background:#01B757!important;color:#fff!important;border:0!important;-webkit-transition:background-color .3s ease-in-out!important;transition:background-color .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:hover{background-color:#00AB51!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:active{background-color:#009546!important}/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0IiwiJHN0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLHlCQUNJLFNBQUEsZ0JBQ0EsUUFBQSxzQkFDQSxRQUFBLHVCQUNBLFFBQUEsc0JBRUEsUUFBQSxlQUNBLG1CQUFBLG1CQUNBLHNCQUFBLGlCQUNBLHVCQUFBLGlCQUNBLG1CQUFBLGlCQUNBLGVBQUEsaUJBRUEsa0JBQUEsaUJBQ0Esb0JBQUEsaUJBQ0EsZUFBQSxpQkNmTSxZQUFhLGlCREFyQixRQUFTLGdCQWtCSCxNQUFBLGVBQ0EsT0FBQSxlQUNBLElBQUEsWUFDQSxLQUFBLFlBQ0EsV0FBQSwwQkFDQSxTQUFBLGVBQ0EsUUFBQSxlQUNBLE9BQUEsWUNkUiwrQ0RYRSxTQUFVLG1CQTZCQSxRQUFBLGdCQUNBLE1BQUEsZ0JBQ0EsWUFBQSxjQUFBLG1CQUFBLFdBQUEsT0FBQSxpQkFBQSxNQUFBLHFCQUNBLE9BQUEsZUNmVixjQUFlLGNEakJmLGlCQWlCRSxlQWtCWSxXQUFBLGlCQ2ZkLFNBQVUsaUJEbUJJLG1FQUNBLFdBQUEsS0NoQmQsUUFBUyxLQUFLLGVEeEJkLFFBQVMsc0JBMENTLFFBQUEsdUJBQ0EsUUFBQSxzQkNmbEIsUUFBUyxlRGlCSyxrQkE1QlosaUJBOEJvQixvQkFBQSxpQkNoQmxCLGVBQWdCLGlCRC9CWixZQWlCTixpQkFzQ1EsdUZBQ0EsaUJBQUEsRUNwQlYsYUFBYyxFRHBDVixTQUFVLEVBMkRBLEtBQUEsRUFFQSx3RkNwQmQsT0FBUSxrQkR6Q1IsT0FBUSxlQWlFTSw0RkFDQSxLQUFBLFFBQ0EsbUJBQUEsS0FBQSxJQUFBLHNCQ3BCZCxXQUFZLEtBQUssSUFBSyxzQkR3QlIsa0dBQ0EsS0FBQSxRQUVBLG1FQUNBLFFBQUEsS0FBQSxLQUFBLGVBQ0EsV0FBQSxrQkFDQSxXQUFBLElBQUEsTUFBQSxRQUVBLHNFQUNBLE1BQUEsa0JBQ0EsVUFBQSxlQ3JCZCxZQUFhLGNEd0JLLHFFQ3JCbEIsT0FBUSxJQUFJLEVBQUksZUR3QkYsWUFBQSxjQUNJLE1BQUEsa0JDdEJsQixVQUFXLGVBRWIsMEVBQ0UsTUFBTyxlQUNQLFFBQVMsS0FBSyxlQUNkLE9BQVEsWUFDUixjQUFlLGNBQ2YsVUFBVyxlQUNYLFlBQWEsY0FDYixPQUFRLGtCQUNSLFdBQVksa0JBQ1osTUFBTyxlQUNQLE9BQVEsWUFDUixtQkFBb0IsaUJBQWlCLElBQUssc0JBQzFDLFdBQVksaUJBQWlCLElBQUssc0JBRXBDLGdGQUNFLGlCQUFrQixrQkFFcEIsaUZBQ0UsaUJBQWtCIn0= */';
/* harmony default export */ const inlineStyles = (css);
;// CONCATENATED MODULE: ./src/iframe/index.ts
// origin: https://github.com/trezor/connect/blob/develop/src/js/iframe/builder.js







/* eslint-disable import/no-mutable-exports */
let instance;
let origin;
let initPromise = (0,lib.createDeferred)();
let timeout = 0;
let error;
/* eslint-enable import/no-mutable-exports */

let _messageID = 0;
// every postMessage to iframe has its own promise to resolve
const messagePromises = {};
const dispose = () => {
  if (instance && instance.parentNode) {
    try {
      instance.parentNode.removeChild(instance);
    } catch (e) {
      // do nothing
    }
  }
  instance = null;
  timeout = 0;
};
const handleIframeBlocked = () => {
  window.clearTimeout(timeout);
  error = lib_exports.ERRORS.TypedError('Init_IframeBlocked');
  dispose();
  initPromise.reject(error);
};
const injectStyleSheet = () => {
  if (!instance) {
    throw lib_exports.ERRORS.TypedError('Init_IframeBlocked');
  }
  const doc = instance.ownerDocument;
  const head = doc.head || doc.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.setAttribute('id', 'TrezorConnectStylesheet');

  // @ts-expect-error
  if (style.styleSheet) {
    // @ts-expect-error
    style.styleSheet.cssText = inlineStyles;
    head.appendChild(style);
  } else {
    style.appendChild(document.createTextNode(inlineStyles));
    head.append(style);
  }
};
const init = async settings => {
  initPromise = (0,lib.createDeferred)();
  const existedFrame = document.getElementById('trezorconnect');
  if (existedFrame) {
    instance = existedFrame;
  } else {
    instance = document.createElement('iframe');
    instance.frameBorder = '0';
    instance.width = '0px';
    instance.height = '0px';
    instance.style.position = 'absolute';
    instance.style.display = 'none';
    instance.style.border = '0px';
    instance.style.width = '0px';
    instance.style.height = '0px';
    instance.id = 'trezorconnect';
  }
  let src;
  if (settings.env === 'web') {
    const manifestString = settings.manifest ? JSON.stringify(settings.manifest) : 'undefined'; // note: btoa(undefined) === btoa('undefined') === "dW5kZWZpbmVk"
    const manifest = `version=${settings.version}&manifest=${encodeURIComponent(btoa(JSON.stringify(manifestString)))}`;
    src = `${settings.iframeSrc}?${manifest}`;
  } else {
    src = settings.iframeSrc;
  }
  instance.setAttribute('src', src);
  if (settings.webusb) {
    console.warn('webusb option is deprecated. use `transports: ["WebUsbTransport"] instead`');
  }
  if (navigator.usb) {
    instance.setAttribute('allow', 'usb');
  }
  origin = (0,urlUtils/* getOrigin */.P$)(instance.src);
  timeout = window.setTimeout(() => {
    initPromise.reject(lib_exports.ERRORS.TypedError('Init_IframeTimeout'));
  }, 10000);
  const onLoad = () => {
    if (!instance) {
      initPromise.reject(lib_exports.ERRORS.TypedError('Init_IframeBlocked'));
      return;
    }
    try {
      // if hosting page is able to access cross-origin location it means that the iframe is not loaded
      const iframeOrigin = instance.contentWindow?.location.origin;
      if (!iframeOrigin || iframeOrigin === 'null') {
        handleIframeBlocked();
        return;
      }
    } catch (e) {
      // empty
    }
    let extension;
    if (typeof chrome !== 'undefined' && chrome.runtime && typeof chrome.runtime.onConnect !== 'undefined') {
      chrome.runtime.onConnect.addListener(() => {});
      extension = chrome.runtime.id;
    }
    instance.contentWindow?.postMessage({
      type: lib_exports.IFRAME.INIT,
      payload: {
        settings,
        extension
      }
    }, origin);
    instance.onload = null;
  };

  // IE hack
  // @ts-expect-error
  if (instance.attachEvent) {
    // @ts-expect-error
    instance.attachEvent('onload', onLoad);
  } else {
    instance.onload = onLoad;
  }
  // inject iframe into host document body
  if (document.body) {
    document.body.appendChild(instance);
    injectStyleSheet();
  }
  try {
    await initPromise.promise;
  } catch (e) {
    // reset state to allow initialization again
    if (instance) {
      if (instance.parentNode) {
        instance.parentNode.removeChild(instance);
      }
      instance = null;
    }
    throw e;
  } finally {
    window.clearTimeout(timeout);
    timeout = 0;
  }
};

// post messages to iframe
const postMessage = (message, usePromise = true) => {
  if (!instance) {
    throw lib_exports.ERRORS.TypedError('Init_IframeBlocked');
  }
  if (usePromise) {
    _messageID++;
    message.id = _messageID;
    messagePromises[_messageID] = (0,lib.createDeferred)();
    const {
      promise
    } = messagePromises[_messageID];
    instance.contentWindow?.postMessage(message, origin);
    return promise;
  }
  instance.contentWindow?.postMessage(message, origin);
  return null;
};
const iframe_clearTimeout = () => {
  window.clearTimeout(timeout);
};
const initIframeLogger = () => {
  const logWriterFactory = () => ({
    add: message => {
      postMessage({
        event: lib_exports.UI_EVENT,
        type: lib_exports.IFRAME.LOG,
        payload: message
      });
    }
  });
  (0,debug/* setLogWriter */.Yn)(logWriterFactory);
};
;// CONCATENATED MODULE: ./src/popup/showPopupRequest.ts
// origin: https://github.com/trezor/connect/blob/develop/src/js/popup/showPopupRequest.js

const LAYER_ID = 'TrezorConnectInteractionLayer';
const HTML = `
    <div class="trezorconnect-container" id="${LAYER_ID}">
        <div class="trezorconnect-window">
            <div class="trezorconnect-head">
                <svg class="trezorconnect-logo" x="0px" y="0px" viewBox="0 0 163.7 41.9" width="78px" height="20px" preserveAspectRatio="xMinYMin meet">
                    <polygon points="101.1,12.8 118.2,12.8 118.2,17.3 108.9,29.9 118.2,29.9 118.2,35.2 101.1,35.2 101.1,30.7 110.4,18.1 101.1,18.1"/>
                    <path d="M158.8,26.9c2.1-0.8,4.3-2.9,4.3-6.6c0-4.5-3.1-7.4-7.7-7.4h-10.5v22.3h5.8v-7.5h2.2l4.1,7.5h6.7L158.8,26.9z M154.7,22.5 h-4V18h4c1.5,0,2.5,0.9,2.5,2.2C157.2,21.6,156.2,22.5,154.7,22.5z"/>
                    <path d="M130.8,12.5c-6.8,0-11.6,4.9-11.6,11.5s4.9,11.5,11.6,11.5s11.7-4.9,11.7-11.5S137.6,12.5,130.8,12.5z M130.8,30.3 c-3.4,0-5.7-2.6-5.7-6.3c0-3.8,2.3-6.3,5.7-6.3c3.4,0,5.8,2.6,5.8,6.3C136.6,27.7,134.2,30.3,130.8,30.3z"/>
                    <polygon points="82.1,12.8 98.3,12.8 98.3,18 87.9,18 87.9,21.3 98,21.3 98,26.4 87.9,26.4 87.9,30 98.3,30 98.3,35.2 82.1,35.2 "/>
                    <path d="M24.6,9.7C24.6,4.4,20,0,14.4,0S4.2,4.4,4.2,9.7v3.1H0v22.3h0l14.4,6.7l14.4-6.7h0V12.9h-4.2V9.7z M9.4,9.7 c0-2.5,2.2-4.5,5-4.5s5,2,5,4.5v3.1H9.4V9.7z M23,31.5l-8.6,4l-8.6-4V18.1H23V31.5z"/>
                    <path d="M79.4,20.3c0-4.5-3.1-7.4-7.7-7.4H61.2v22.3H67v-7.5h2.2l4.1,7.5H80l-4.9-8.3C77.2,26.1,79.4,24,79.4,20.3z M71,22.5h-4V18 h4c1.5,0,2.5,0.9,2.5,2.2C73.5,21.6,72.5,22.5,71,22.5z"/>
                    <polygon points="40.5,12.8 58.6,12.8 58.6,18.1 52.4,18.1 52.4,35.2 46.6,35.2 46.6,18.1 40.5,18.1 "/>
                </svg>
                <div class="trezorconnect-close">
                    <svg x="0px" y="0px" viewBox="24 24 60 60" width="24px" height="24px" preserveAspectRatio="xMinYMin meet">
                        <polygon class="st0" points="40,67.9 42.1,70 55,57.1 67.9,70 70,67.9 57.1,55 70,42.1 67.9,40 55,52.9 42.1,40 40,42.1 52.9,55 "/>
                    </svg>
                </div>
            </div>
            <div class="trezorconnect-body">
                <h3>Popup was blocked</h3>
                <p>Please click to "Continue" to open popup manually</p>
                <button class="trezorconnect-open">Continue</button>
            </div>
        </div>
    </div>
`;
const showPopupRequest = (open, cancel) => {
  if (document.getElementById(LAYER_ID)) {
    return;
  }
  const div = document.createElement('div');
  div.id = LAYER_ID;
  div.className = 'trezorconnect-container';
  div.innerHTML = HTML;
  if (document.body) {
    document.body.appendChild(div);
  }
  const button = div.getElementsByClassName('trezorconnect-open')[0];
  button.onclick = () => {
    open();
    if (document.body) {
      document.body.removeChild(div);
    }
  };
  const close = div.getElementsByClassName('trezorconnect-close')[0];
  close.onclick = () => {
    cancel();
    if (document.body) {
      document.body.removeChild(div);
    }
  };
};
;// CONCATENATED MODULE: ./src/popup/index.ts
// origin: https://github.com/trezor/connect/blob/develop/src/js/popup/PopupManager.js







// Event `POPUP_REQUEST_TIMEOUT` is used to close Popup window when there was no handshake from iframe.
const POPUP_REQUEST_TIMEOUT = 850;
const POPUP_CLOSE_INTERVAL = 500;
const POPUP_OPEN_TIMEOUT = 3000;
class PopupManager extends (events_default()) {
  locked = false;
  requestTimeout = 0;
  closeInterval = 0;

  // handleMessage: (event: MessageEvent) => void;

  // handleExtensionConnect: () => void;
  // handleExtensionMessage: () => void;
  extensionTabId = 0;
  constructor(settings) {
    super();
    this.settings = settings;
    this.origin = (0,urlUtils/* getOrigin */.P$)(settings.popupSrc);
    this.handleMessage = this.handleMessage.bind(this);
    this.iframeHandshake = (0,lib.createDeferred)(lib_exports.IFRAME.LOADED);
    if (this.settings.env === 'webextension') {
      this.handleExtensionConnect = this.handleExtensionConnect.bind(this);
      this.handleExtensionMessage = this.handleExtensionMessage.bind(this);
      chrome.runtime.onConnect.addListener(this.handleExtensionConnect);
    }
    window.addEventListener('message', this.handleMessage, false);
  }
  request() {
    // popup request
    // TODO: ie - open immediately and hide it but post handshake after timeout

    // bring popup window to front
    if (this.locked) {
      if (this.popupWindow) {
        if (this.settings.env === 'webextension') {
          chrome.tabs.update(this.popupWindow.id, {
            active: true
          });
        } else {
          this.popupWindow.focus();
        }
      }
      return;
    }

    // When requesting a popup window and there is a reference to popup window and it is not locked
    // we close it so we can open a new one.
    // This is necessary when popup window is in error state and we want to open a new one.
    if (this.popupWindow && !this.locked) {
      this.close();
    }
    const openFn = this.open.bind(this);
    this.locked = true;
    const timeout = this.settings.env === 'webextension' ? 1 : POPUP_REQUEST_TIMEOUT;
    this.requestTimeout = window.setTimeout(() => {
      this.requestTimeout = 0;
      openFn();
    }, timeout);
  }
  unlock() {
    this.locked = false;
  }
  open() {
    const src = this.settings.popupSrc;
    this.popupPromise = (0,lib.createDeferred)(lib_exports.POPUP.LOADED);
    this.openWrapper(src);
    this.closeInterval = window.setInterval(() => {
      if (!this.popupWindow) return;
      if (this.settings.env === 'webextension') {
        chrome.tabs.get(this.popupWindow.id, tab => {
          if (!tab) {
            // If no reference to popup window, it was closed by user or by this.close() method.
            this.emit(lib_exports.POPUP.CLOSED);
            this.clear();
          }
        });
      } else if (this.popupWindow.closed) {
        this.clear();
        this.emit(lib_exports.POPUP.CLOSED);
      }
    }, POPUP_CLOSE_INTERVAL);

    // open timeout will be cancelled by POPUP.BOOTSTRAP message
    this.openTimeout = setTimeout(() => {
      this.clear();
      showPopupRequest(this.open.bind(this), () => {
        this.emit(lib_exports.POPUP.CLOSED);
      });
    }, POPUP_OPEN_TIMEOUT);
  }
  openWrapper(url) {
    if (this.settings.env === 'webextension') {
      chrome.windows.getCurrent(currentWindow => {
        // Request coming from extension popup,
        // create new window above instead of opening new tab
        if (currentWindow.type !== 'normal') {
          chrome.windows.create({
            url
          }, newWindow => {
            chrome.tabs.query({
              windowId: newWindow?.id,
              active: true
            }, tabs => {
              // eslint-disable-next-line prefer-destructuring
              this.popupWindow = tabs[0];
            });
          });
        } else {
          chrome.tabs.query({
            currentWindow: true,
            active: true
          }, tabs => {
            this.extensionTabId = tabs[0].id;
            chrome.tabs.create({
              url,
              index: tabs[0].index + 1
            }, tab => {
              this.popupWindow = tab;
            });
          });
        }
      });
    } else if (this.settings.env === 'electron') {
      this.popupWindow = window.open(url, 'modal');
    } else {
      this.popupWindow = window.open('', '_blank');
      if (this.popupWindow) {
        this.popupWindow.location.href = url; // otherwise android/chrome loose window.opener reference
      }
    }
  }

  handleExtensionConnect(port) {
    // Ignore port if name does not match
    if (port.name !== 'trezor-connect') return;

    // Ignore port if name does match, but port created not by current popup
    if (!this.popupWindow || this.popupWindow && this.popupWindow.id !== port.sender?.tab?.id) return;

    // since POPUP.BOOTSTRAP will not be handled by "handleMessage" we need to threat "content-script" connection as the same event
    // popup is opened properly, now wait for POPUP.LOADED message (in this case handled by "handleExtensionMessage")
    if (this.openTimeout) clearTimeout(this.openTimeout);
    this.extensionPort = port;
    this.extensionPort.onMessage.addListener(this.handleExtensionMessage);
  }
  handleExtensionMessage(message) {
    if (!this.extensionPort) return;
    const port = this.extensionPort;
    const {
      data
    } = message;
    if (!data || typeof data !== 'object') return;
    if (data.type === lib_exports.POPUP.ERROR) {
      // handle popup error
      const errorMessage = data.payload && typeof data.payload.error === 'string' ? data.payload.error : null;
      this.emit(lib_exports.POPUP.CLOSED, errorMessage ? `Popup error: ${errorMessage}` : null);
      this.clear();
    } else if (data.type === lib_exports.POPUP.LOADED) {
      if (this.popupPromise) {
        this.popupPromise.resolve();
      }
      this.iframeHandshake.promise.then(payload => {
        port.postMessage({
          type: lib_exports.POPUP.INIT,
          payload: {
            ...payload,
            settings: this.settings
          }
        });
      });
    } else if (data.type === lib_exports.POPUP.EXTENSION_USB_PERMISSIONS) {
      chrome.tabs.query({
        currentWindow: true,
        active: true
      }, tabs => {
        chrome.tabs.create({
          url: 'trezor-usb-permissions.html',
          index: tabs[0].index + 1
        }, _tab => {
          // do nothing
        });
      });
    } else if (data.type === lib_exports.POPUP.CLOSE_WINDOW) {
      this.clear();
    }
  }
  handleMessage(message) {
    // ignore messages from domain other then popup origin and without data
    // const data: CoreMessage = message.data;
    const {
      data
    } = message;
    if ((0,urlUtils/* getOrigin */.P$)(message.origin) !== this.origin || !data || typeof data !== 'object') return;
    if (data.type === lib_exports.IFRAME.LOADED) {
      this.iframeHandshake.resolve(data.payload);
    } else if (data.type === lib_exports.POPUP.BOOTSTRAP) {
      // popup is opened properly, now wait for POPUP.LOADED message
      if (this.openTimeout) clearTimeout(this.openTimeout);
    } else if (data.type === lib_exports.POPUP.ERROR && this.popupWindow) {
      const errorMessage = data.payload && typeof data.payload.error === 'string' ? data.payload.error : null;
      this.emit(lib_exports.POPUP.CLOSED, errorMessage ? `Popup error: ${errorMessage}` : null);
      this.clear();
    } else if (data.type === lib_exports.POPUP.LOADED) {
      if (this.popupPromise) {
        this.popupPromise.resolve();
      }
      // popup is successfully loaded
      this.iframeHandshake.promise.then(payload => {
        // send ConnectSettings to popup
        // note this settings and iframe.ConnectSettings could be different (especially: origin, popup, webusb, debug)
        // now popup is able to load assets
        this.popupWindow.postMessage({
          type: lib_exports.POPUP.INIT,
          payload: {
            ...payload,
            settings: this.settings
          }
        }, this.origin);
      });
    } else if (data.type === lib_exports.POPUP.CANCEL_POPUP_REQUEST || data.type === lib_exports.UI.CLOSE_UI_WINDOW) {
      this.clear(false);
    }
  }
  clear(focus = true) {
    this.locked = false;
    this.popupPromise = undefined;
    if (this.requestTimeout) {
      window.clearTimeout(this.requestTimeout);
      this.requestTimeout = 0;
    }
    if (this.openTimeout) {
      clearTimeout(this.openTimeout);
      this.openTimeout = undefined;
    }
    if (this.closeInterval) {
      window.clearInterval(this.closeInterval);
      this.closeInterval = 0;
    }
    if (this.extensionPort) {
      this.extensionPort.disconnect();
      this.extensionPort = undefined;
    }

    // switch to previously focused tab

    if (focus && this.extensionTabId) {
      chrome.tabs.update(this.extensionTabId, {
        active: true
      });
      this.extensionTabId = 0;
    }
  }
  close() {
    if (!this.popupWindow) return;
    if (this.settings.env === 'webextension') {
      // @ts-expect-error
      let _e = chrome.runtime.lastError;
      chrome.tabs.remove(this.popupWindow.id, () => {
        _e = chrome.runtime.lastError;
      });
      return;
    }
    this.popupWindow.close();
    this.popupWindow = null;
  }
  async postMessage(message) {
    // device needs interaction but there is no popup/ui
    // maybe popup request wasn't handled
    // ignore "ui_request_window" type
    if (!this.popupWindow && message.type !== lib_exports.UI.REQUEST_UI_WINDOW && this.openTimeout) {
      this.clear();
      showPopupRequest(this.open.bind(this), () => {
        this.emit(lib_exports.POPUP.CLOSED);
      });
      return;
    }

    // post message before popup request finalized
    if (this.popupPromise) {
      await this.popupPromise.promise;
    }
    // post message to popup window
    if (this.popupWindow) {
      this.popupWindow.postMessage(message, this.origin);
    }
  }
}
;// CONCATENATED MODULE: ./src/webusb/button.ts
// origin: https://github.com/trezor/connect/blob/develop/src/js/webusb/button.js

const render = (className = '', url) => {
  const query = className || '.trezor-webusb-button';
  const buttons = document.querySelectorAll(query);
  const src = `${url}?${Date.now()}`;
  buttons.forEach(b => {
    if (b.getElementsByTagName('iframe').length < 1) {
      const bounds = b.getBoundingClientRect();
      const btnIframe = document.createElement('iframe');
      btnIframe.frameBorder = '0';
      btnIframe.width = `${Math.round(bounds.width)}px`;
      btnIframe.height = `${Math.round(bounds.height)}px`;
      btnIframe.style.position = 'absolute';
      btnIframe.style.top = '0px';
      btnIframe.style.left = '0px';
      btnIframe.style.zIndex = '1';
      // btnIframe.style.opacity = '0'; // this makes click impossible on cross-origin
      btnIframe.setAttribute('allow', 'usb');
      btnIframe.setAttribute('scrolling', 'no');
      btnIframe.src = src;

      // inject iframe into button
      b.append(btnIframe);
    }
  });
};
/* harmony default export */ const webusb_button = (render);
;// CONCATENATED MODULE: ./src/connectSettings.ts

const getEnv = () => {
  if (typeof chrome !== 'undefined' && typeof chrome.runtime?.onConnect !== 'undefined') {
    return 'webextension';
  }
  if (typeof navigator !== 'undefined') {
    if (typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative') {
      return 'react-native';
    }
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf(' electron/') > -1) {
      return 'electron';
    }
  }
  return 'web';
};
/**
 * Settings from host
 * @param input Partial<ConnectSettings>
 */
const parseConnectSettings = (input = {}) => {
  const settings = {
    popup: true,
    ...input
  };
  // For debugging purposes `connectSrc` could be defined in `global.__TREZOR_CONNECT_SRC` variable
  let globalSrc;
  if (typeof window !== 'undefined') {
    // @ts-expect-error not defined in globals outside of the package
    globalSrc = window.__TREZOR_CONNECT_SRC;
  } else if (typeof __webpack_require__.g !== 'undefined') {
    globalSrc = __webpack_require__.g.__TREZOR_CONNECT_SRC;
  }
  if (typeof globalSrc === 'string') {
    settings.connectSrc = globalSrc;
    settings.debug = true;
  }

  // For debugging purposes `connectSrc` could be defined in url query of hosting page. Usage:
  // https://3rdparty-page.com/?trezor-connect-src=https://localhost:8088/
  if (typeof window !== 'undefined' && typeof window.location?.search === 'string') {
    const vars = window.location.search.split('&');
    const customUrl = vars.find(v => v.indexOf('trezor-connect-src') >= 0);
    if (customUrl) {
      const [, connectSrc] = customUrl.split('=');
      settings.connectSrc = decodeURIComponent(connectSrc);
      settings.debug = true;
    }
  }
  if (typeof input.env !== 'string') {
    settings.env = getEnv();
  }
  return (0,lib_exports.parseConnectSettings)(settings);
};
;// CONCATENATED MODULE: ./src/index.ts


// NOTE: @trezor/connect part is intentionally not imported from the index due to NormalReplacementPlugin
// in packages/suite-build/configs/web.webpack.config.ts








const eventEmitter = new (events_default())();
const _log = (0,debug/* initLog */.KR)('@trezor/connect-web');
let _settings = parseConnectSettings();
let _popupManager;
const initPopupManager = () => {
  const pm = new PopupManager(_settings);
  pm.on(lib_exports.POPUP.CLOSED, error => {
    postMessage({
      type: lib_exports.POPUP.CLOSED,
      payload: error ? {
        error
      } : null
    }, false);
  });
  return pm;
};
const manifest = data => {
  _settings = parseConnectSettings({
    ..._settings,
    manifest: data
  });
};
const src_dispose = () => {
  eventEmitter.removeAllListeners();
  dispose();
  _settings = parseConnectSettings();
  if (_popupManager) {
    _popupManager.close();
  }
  return Promise.resolve(undefined);
};
const cancel = error => {
  if (_popupManager) {
    _popupManager.emit(lib_exports.POPUP.CLOSED, error);
  }
};

// handle message received from iframe
const handleMessage = messageEvent => {
  // ignore messages from domain other then iframe origin
  if (messageEvent.origin !== origin) return;
  const message = (0,lib_exports.parseMessage)(messageEvent.data);
  const id = message.id || 0;
  _log.log('handleMessage', message);
  switch (message.event) {
    case lib_exports.RESPONSE_EVENT:
      if (messagePromises[id]) {
        // resolve message promise (send result of call method)
        messagePromises[id].resolve({
          id,
          success: message.success,
          payload: message.payload
        });
        delete messagePromises[id];
      } else {
        _log.warn(`Unknown message id ${id}`);
      }
      break;
    case lib_exports.DEVICE_EVENT:
      // pass DEVICE event up to html
      eventEmitter.emit(message.event, message);
      eventEmitter.emit(message.type, message.payload); // DEVICE_EVENT also emit single events (connect/disconnect...)
      break;
    case lib_exports.TRANSPORT_EVENT:
      eventEmitter.emit(message.event, message);
      eventEmitter.emit(message.type, message.payload);
      break;
    case lib_exports.BLOCKCHAIN_EVENT:
      eventEmitter.emit(message.event, message);
      eventEmitter.emit(message.type, message.payload);
      break;
    case lib_exports.UI_EVENT:
      if (message.type === lib_exports.IFRAME.BOOTSTRAP) {
        iframe_clearTimeout();
        break;
      }
      if (message.type === lib_exports.IFRAME.LOADED) {
        initPromise.resolve();
      }
      if (message.type === lib_exports.IFRAME.ERROR) {
        initPromise.reject(message.payload.error);
      }

      // pass UI event up
      eventEmitter.emit(message.event, message);
      eventEmitter.emit(message.type, message.payload);
      break;
    default:
      _log.log('Undefined message', message.event, messageEvent.data);
  }
};
const src_init = async (settings = {}) => {
  if (instance) {
    throw lib_exports.ERRORS.TypedError('Init_AlreadyInitialized');
  }
  _settings = parseConnectSettings({
    ..._settings,
    ...settings
  });
  if (!_settings.manifest) {
    throw lib_exports.ERRORS.TypedError('Init_ManifestMissing');
  }

  // defaults for connect-web
  if (!_settings.transports?.length) {
    _settings.transports = ['BridgeTransport', 'WebUsbTransport'];
  }
  if (_settings.lazyLoad) {
    // reset "lazyLoad" after first use
    _settings.lazyLoad = false;
    return;
  }
  if (!_popupManager) {
    _popupManager = initPopupManager();
  }

  // connect-web is running in third-party domain so we use iframe to pass logs to shared worker.
  initIframeLogger();
  _log.enabled = !!_settings.debug;
  window.addEventListener('message', handleMessage);
  window.addEventListener('unload', src_dispose);
  await init(_settings);
};
const call = async params => {
  if (!instance && !timeout) {
    // init popup with lazy loading before iframe initialization
    _settings = parseConnectSettings(_settings);
    if (!_settings.manifest) {
      return (0,lib_exports.createErrorMessage)(lib_exports.ERRORS.TypedError('Init_ManifestMissing'));
    }
    if (!_popupManager) {
      _popupManager = initPopupManager();
    }
    _popupManager.request();

    // auto init with default settings
    try {
      await src_init(_settings);
    } catch (error) {
      if (_popupManager) {
        // Catch fatal iframe errors (not loading)
        if (['Init_IframeBlocked', 'Init_IframeTimeout'].includes(error.code)) {
          _popupManager.postMessage((0,lib_exports.createUiMessage)(lib_exports.UI.IFRAME_FAILURE));
        } else {
          _popupManager.clear();
        }
      }
      return (0,lib_exports.createErrorMessage)(error);
    }
  }
  if (timeout) {
    // this.init was called, but iframe doesn't return handshake yet
    return (0,lib_exports.createErrorMessage)(lib_exports.ERRORS.TypedError('Init_ManifestMissing'));
  }
  if (error) {
    // iframe was initialized with error
    return (0,lib_exports.createErrorMessage)(error);
  }

  // request popup window it might be used in the future
  if (_settings.popup && _popupManager) {
    _popupManager.request();
  }

  // post message to iframe
  try {
    const response = await postMessage({
      type: lib_exports.IFRAME.CALL,
      payload: params
    });
    if (response) {
      if (!response.success && response.payload.code !== 'Device_CallInProgress' && _popupManager) {
        _popupManager.unlock();
      }
      return response;
    }
    if (_popupManager) {
      _popupManager.unlock();
    }
    return (0,lib_exports.createErrorMessage)(lib_exports.ERRORS.TypedError('Method_NoResponse'));
  } catch (error) {
    _log.error('__call error', error);
    if (_popupManager) {
      _popupManager.clear();
    }
    return (0,lib_exports.createErrorMessage)(error);
  }
};
const uiResponse = response => {
  if (!instance) {
    throw lib_exports.ERRORS.TypedError('Init_NotInitialized');
  }
  const {
    type,
    payload
  } = response;
  postMessage({
    event: lib_exports.UI_EVENT,
    type,
    payload
  });
};
const renderWebUSBButton = className => {
  webusb_button(className, _settings.webusbSrc);
};
const requestLogin = async params => {
  if (typeof params.callback === 'function') {
    const {
      callback
    } = params;

    // TODO: set message listener only if iframe is loaded correctly
    const loginChallengeListener = async event => {
      const {
        data
      } = event;
      if (data && data.type === lib_exports.UI.LOGIN_CHALLENGE_REQUEST) {
        try {
          const payload = await callback();
          postMessage({
            event: lib_exports.UI_EVENT,
            type: lib_exports.UI.LOGIN_CHALLENGE_RESPONSE,
            payload
          });
        } catch (error) {
          postMessage({
            event: lib_exports.UI_EVENT,
            type: lib_exports.UI.LOGIN_CHALLENGE_RESPONSE,
            payload: error.message
          });
        }
      }
    };
    window.addEventListener('message', loginChallengeListener, false);
    const response = await call({
      method: 'requestLogin',
      ...params,
      asyncChallenge: true,
      callback: null
    });
    window.removeEventListener('message', loginChallengeListener);
    return response;
  }
  return call({
    method: 'requestLogin',
    ...params
  });
};
const disableWebUSB = () => {
  if (!instance) {
    throw lib_exports.ERRORS.TypedError('Init_NotInitialized');
  }
  postMessage({
    event: lib_exports.UI_EVENT,
    type: lib_exports.TRANSPORT.DISABLE_WEBUSB
  });
};

/**
 * Initiate device pairing procedure.
 */
const requestWebUSBDevice = async () => {
  try {
    await window.navigator.usb.requestDevice({
      filters: config/* config */.v.webusb
    });
    postMessage({
      event: lib_exports.UI_EVENT,
      type: lib_exports.TRANSPORT.REQUEST_DEVICE
    });
  } catch (_err) {
    // user hits cancel gets "DOMException: No device selected."
    // no need to log this
  }
};
const TrezorConnect = (0,factory/* factory */.d)({
  eventEmitter,
  manifest,
  init: src_init,
  call,
  requestLogin,
  uiResponse,
  renderWebUSBButton,
  disableWebUSB,
  requestWebUSBDevice,
  cancel,
  dispose: src_dispose
});
/* harmony default export */ const src = (TrezorConnect);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
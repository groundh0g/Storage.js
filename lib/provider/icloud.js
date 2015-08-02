/*
 Copyright (c) 2015 Joseph B. Hall [@groundh0g]

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

var storageProviders = storageProviders || {};

function iCloudProvider(clientKey, apiUrl, authUrl) {
    BaseProvider.call(this, {
        name: "iCloud",
        version: "0.1.0",
        faIcon: "apple"
    });

    var self = this;
    var CLIENT_KEY = clientKey || "";
    var API_URL = apiUrl || "https://api.apple-cloudkit.com";
    var AUTH_URL = authUrl || API_URL;

    this.onCheckAuth = function(forceAuth) {};
    this.onAuthorize = function(authResult) {};

    this.onGetDirectoryList = function(pattern) {};
    this.onDirectoryExists = function(path) {};
    this.onCreateDirectory = function(path) {};
    this.onDeleteDirectory = function(path) {};

    this.onGetFileList = function(pattern) {};
    this.onFileExists = function(path) {};
    this.onCreateFile = function(path) {};
    this.onDeleteFile = function(path) {};
    this.onReadFile = function(path) {};
    this.onWriteFile = function(path, fileData) {};
}

if(STORAGE_API_KEY_ICLOUD) {
    (new iCloudProvider(STORAGE_API_KEY_ICLOUD)).register();
}
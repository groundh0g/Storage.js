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

function BaseProvider(init) {
    var self = this;

    init = init || {};
    this.name = init.name || "Mock";
    this.version = init.version || "0.1.0";

    var doCheckAuth = function(forceAuth) {
        // TODO: add logic
        if(self.onCheckAuth) {
            return self.onCheckAuth(forceAuth);
        }
        return false;
    };

    var doAuthorize = function(authResult) {
        // TODO: add logic
        if(self.onAuthorize) {
            return self.onAuthorize(authResult);
        }
        return false;
    };

    var doGetDirectoryList = function(pattern) {
        // TODO: add logic
        if(self.onGetDirectoryList) {
            return self.onGetDirectoryList(pattern);
        }
        return [];
    };

    var doDirectoryExists = function(path) {
        // TODO: add logic
        if(self.onDirectoryExists) {
            return self.onDirectoryExists(path);
        }
        return false;
    };

    var doCreateDirectory = function(path) {
        // TODO: add logic
        if(self.onCreateDirectory) {
            return self.onCreateDirectory(path);
        }
        return false;
    };

    var doDeleteDirectory = function(path) {
        // TODO: add logic
        if(self.onDeleteDirectory) {
            return self.onDeleteDirectory(path);
        }
        return false;
    };

    var doGetFileList = function(pattern) {
        // TODO: add logic
        if(self.onGetFileList) {
            return self.onGetFileList(pattern);
        }
        return [];
    };

    var doFileExists = function(path) {
        // TODO: add logic
        if(self.onFileExists) {
            return self.onFileExists(path);
        }
        return false;
    };

    var doCreateFile = function(path) {
        // TODO: add logic
        if(self.onCreateFile) {
            return self.onCreateFile(path);
        }
        return false;
    };

    var doDeleteFile = function(path) {
        // TODO: add logic
        if(self.onDeleteFile) {
            return self.onDeleteFile(path);
        }
        return false;
    };

    var doReadFile = function(path) {
        // TODO: add logic
        if(self.onReadFile) {
            return self.onReadFile(path);
        }
        return false;
    };

    var doWriteFile = function(path, fileData) {
        // TODO: add logic
        if(self.onWriteFile) {
            return self.onWriteFile(path, fileData);
        }
        return false;
    };

    // add this packer instance to the list of available packers
    this.register = function() { storageProviders[self.name] = self; };
}
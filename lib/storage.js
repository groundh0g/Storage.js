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

function StorageJsLib() {
    var self = this;

    this.containers = [];
    this.currentContainerIndex = -1;

    this.addContainer = function (container) {
        if (container) {
            self.containers.push(container);
        }
    };

    this.getContainer = function (index) {
        var result = null;
        if (self.containers.length > 0 && index >= 0) {
            result = self.containers[Math.min(index, self.containers.length - 1)];
        }
        return result;
    };

    this.currentContainer = function () {
        return self.getContainer(self.currentContainerIndex);
    };

    this.messages = {};

    this.clearLog = function () {
        self.messages = {
            ERROR: {class: "danger", messages: []},
            WARN: {class: "warning", messages: []},
            INFO: {class: "info", messages: []}
        };
    };

    this.log = function (type, message) {
        self.messages[type || "INFO"].messages.push(message);
    };

    this.logCount = function (type) {
        return {
            ERROR: self.messages.ERROR.messages.length,
            WARN:  self.messages.WARN.messages.length,
            INFO:  self.messages.INFO.messages.length,
            total: self.messages.ERROR.messages.length +
                   self.messages.WARN.messages.length +
                   self.messages.INFO.messages.length
        };
    };

    this.init = function () {
        this.clearLog();
    };

    self.init();
}

StorageJsLib.version = "0.1.0";
StorageJsLib.name = "Storage.js";
StorageJsLib.githubUrl = "https://github.com/groundh0g/Storage.js";
StorageJsLib.LOG_TYPE = {
    ERROR: "ERROR",
    WARN: "WARN",
    INFO: "INFO"
};

var StorageJS = new StorageJsLib();

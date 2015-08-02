describe("Dropbox Provider", function () {
    var provider;

    beforeEach(function () {
        provider = storageProviders["Dropbox"];
    });

    it(SpecInfoStorageApiKey(STORAGE_API_KEY_DROPBOX, "DROPBOX"), function() { expect(true).toBeTruthy() });

    if(STORAGE_API_KEY_DROPBOX) {
        it("should NOT be falsy, since provider instance is valid", function () {
            expect(provider).not.toBeFalsy();
        });
    } else {
        it("should be falsy, since provider instance is missing", function () {
            expect(provider).toBeFalsy();
        });
    }
});

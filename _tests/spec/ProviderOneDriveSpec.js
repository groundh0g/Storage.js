describe("OneDrive Provider", function () {
    var provider;

    beforeEach(function () {
        provider = storageProviders["OneDrive"];
    });

    it(SpecInfoStorageApiKey(STORAGE_API_KEY_ONEDRIVE, "ONEDRIVE"), function() { expect(true).toBeTruthy() });

    if(STORAGE_API_KEY_ONEDRIVE) {
        it("should NOT be falsy, since provider instance is valid", function () {
            expect(provider).not.toBeFalsy();
        });
    } else {
        it("should be falsy, since provider instance is missing", function () {
            expect(provider).toBeFalsy();
        });
    }
});

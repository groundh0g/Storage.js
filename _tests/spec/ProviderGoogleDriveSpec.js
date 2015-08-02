describe("Google Drive Provider", function () {
    var provider;

    beforeEach(function () {
        provider = storageProviders["Google Drive"];
    });

    it(SpecInfoStorageApiKey(STORAGE_API_KEY_GOOGLE_DRIVE, "GOOGLE_DRIVE"), function() { expect(true).toBeTruthy() });

    if(STORAGE_API_KEY_GOOGLE_DRIVE) {
        it("should NOT be falsy, since provider instance is valid", function () {
            expect(provider).not.toBeFalsy();
        });
    } else {
        it("should be falsy, since provider instance is missing", function () {
            expect(provider).toBeFalsy();
        });
    }
});

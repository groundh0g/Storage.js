describe("GitHub Provider", function () {
    var provider;

    beforeEach(function () {
        provider = storageProviders["GitHub"];
    });

    it(SpecInfoStorageApiKey(STORAGE_API_KEY_GITHUB, "GITHUB"), function() { expect(true).toBeTruthy() });

    if(STORAGE_API_KEY_BITBUCKET) {
        it("should NOT be falsy, since provider instance is valid", function () {
            expect(provider).not.toBeFalsy();
        });
    } else {
        it("should be falsy, since provider instance is missing", function () {
            expect(provider).toBeFalsy();
        });
    }
});

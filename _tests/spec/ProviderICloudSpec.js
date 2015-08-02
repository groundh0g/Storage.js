describe("iCloud Provider", function () {
    var provider;

    beforeEach(function () {
        provider = storageProviders["iCloud"];
    });

    if(provider) {
        it("should NOT be falsy, since provider instance is valid", function () {
            expect(provider).not.toBeFalsy();
        });
    } else {
        it("should be falsy, since provider instance is missing", function () {
            expect(provider).toBeFalsy();
        });
    }
});

describe("ZIP File Provider", function () {
    var provider;

    beforeEach(function () {
        provider = storageProviders["ZIP File"];
    });

    it("should NOT be falsy", function () {
        expect(provider).not.toBeFalsy();
    });
});

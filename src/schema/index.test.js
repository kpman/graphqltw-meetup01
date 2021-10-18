const rewire = require("rewire")
const index = rewire("./index")
const batchLoadAuthors = index.__get__("batchLoadAuthors")
const batchLoadPostsByAuthor = index.__get__("batchLoadPostsByAuthor")
// @ponicode
describe("batchLoadAuthors", () => {
    test("0", () => {
        let param1 = [["da7588892", "bc23a9d531064583ace8f67dad60f6bb", "da7588892"], ["bc23a9d531064583ace8f67dad60f6bb", "c466a48309794261b64a4f02cfcc3d64", "c466a48309794261b64a4f02cfcc3d64"], ["da7588892", "c466a48309794261b64a4f02cfcc3d64", "da7588892"]]
        let callFunction = () => {
            batchLoadAuthors(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [[9876, "bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb"], ["c466a48309794261b64a4f02cfcc3d64", "c466a48309794261b64a4f02cfcc3d64", 12345], ["c466a48309794261b64a4f02cfcc3d64", 12345, "c466a48309794261b64a4f02cfcc3d64"]]
        let callFunction = () => {
            batchLoadAuthors(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [[12345, 12345, 12345], ["da7588892", "da7588892", 9876], [9876, 9876, 9876]]
        let callFunction = () => {
            batchLoadAuthors(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [[12345, 9876, "c466a48309794261b64a4f02cfcc3d64"], [9876, 9876, 12345], [9876, 12345, "da7588892"]]
        let callFunction = () => {
            batchLoadAuthors(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [[12345, 12345, "c466a48309794261b64a4f02cfcc3d64"], ["bc23a9d531064583ace8f67dad60f6bb", 12345, "c466a48309794261b64a4f02cfcc3d64"], ["c466a48309794261b64a4f02cfcc3d64", "bc23a9d531064583ace8f67dad60f6bb", "da7588892"]]
        let callFunction = () => {
            batchLoadAuthors(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            batchLoadAuthors(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("batchLoadPostsByAuthor", () => {
    test("0", () => {
        let param1 = [[9876, "c466a48309794261b64a4f02cfcc3d64", "da7588892"], ["c466a48309794261b64a4f02cfcc3d64", 9876, 9876], [12345, "c466a48309794261b64a4f02cfcc3d64", 12345]]
        let callFunction = () => {
            batchLoadPostsByAuthor(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [[12345, "da7588892", "c466a48309794261b64a4f02cfcc3d64"], ["da7588892", "da7588892", "bc23a9d531064583ace8f67dad60f6bb"], ["da7588892", "bc23a9d531064583ace8f67dad60f6bb", "da7588892"]]
        let callFunction = () => {
            batchLoadPostsByAuthor(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["c466a48309794261b64a4f02cfcc3d64", "bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb"], ["bc23a9d531064583ace8f67dad60f6bb", 12345, 9876], ["bc23a9d531064583ace8f67dad60f6bb", 12345, "c466a48309794261b64a4f02cfcc3d64"]]
        let callFunction = () => {
            batchLoadPostsByAuthor(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [[12345, 9876, "bc23a9d531064583ace8f67dad60f6bb"], [12345, "c466a48309794261b64a4f02cfcc3d64", "bc23a9d531064583ace8f67dad60f6bb"], [9876, "bc23a9d531064583ace8f67dad60f6bb", 9876]]
        let callFunction = () => {
            batchLoadPostsByAuthor(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["bc23a9d531064583ace8f67dad60f6bb", 9876, 12345], ["da7588892", "c466a48309794261b64a4f02cfcc3d64", 12345], [12345, "da7588892", 12345]]
        let callFunction = () => {
            batchLoadPostsByAuthor(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            batchLoadPostsByAuthor(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

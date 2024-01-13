/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const bookbag = {
    name: "School bag",
    volume: 50,
    color: "blue",
    pocketNum: 10,
    strapLength: {
        left: 30,
        right: 30,
    }, 
    coverOpen: false,
    pencilPocketLid: function (lidStatus) {
        this.coverOpen = lidStatus;     
    },
    
    newStrapLength: function (lengthLeft, lengthRight) {
        if(typeof lengthLeft !== 'number' || typeof lengthRight !== 'number'){
            return "Error! Both arguments must be numbers.";
            } else {
                this.strapLength.left = lengthLeft; 
                this.strapLength.right = lengthRight;
                }
    }
    };






    console.log("My bookbag:", bookbag); // Accessing the whole object
    console.log("The Pencil Pocket Lid:", bookbag.pocketNum);
    


/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class PencilCase {
    constructor(
        color,
        size,
        pocketNum,
        ownerName,
        strapLength,
        materialType,
        

        ) {
        // property
        this.color = color;
        this.size = size;
        this.pocketNum = pocketNum;
        this.ownerName = ownerName;
        this.strapLength = strapLength;
        this.materialType = materialType;
        }
        
        
        showColor() {
            return `The pencil case is ${this.color}.`;
            }
            addPocket(){
                this.pocketNum++;
                }
                
                }
                let myPencilCase = new PencilCase("blue", "small",
                2,
                "John Doe", 15, "leather"
                );
                console.log(myPencilCase.showColor());
                myPencilCase.addPocket();
                console.log(`After adding one pocket, there are now ${myPencilCase.
                    pocketNum} pockets.`);
                   
                  

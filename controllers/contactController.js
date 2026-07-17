//@desc get all contacts 
//@route GET /api/contacts 
//@access public 

const getContact = ((req, res) => {
    res.json({ "message": "Get all the contacts" });
});

//@desc Create new  contact 
//@route POST /api/contacts 
//@access public 

const createContact = ((req, res) => {
    res.json({ "message": "Creating contacts" });
});




module.exposrts = "getContact";
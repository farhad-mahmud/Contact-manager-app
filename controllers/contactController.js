//@desc get all contacts 
//@route GET /api/contacts 
//@access public 

const getContact = ((req, res) => {
    res.status(200).json({ "message": "Get all the contacts" });
});

//@desc Create new  contact 
//@route POST /api/contacts 
//@access public 

const createContact = ((req, res) => {
    res.status(201).json({ "message": "Creating contacts" });
});

//@desc Create new  contact 
//@route POST /api/contacts 
//@access public 

const GetIndContact = ((req, res) => {
    res.json({ "message": `update contact for ${req.params.id}` });
});

//@desc Create new  contact 
//@route POST /api/contacts 
//@access public 

const updateContact = ((req, res) => {
    res.status(201).json({ "message": "Creating contacts" });
});



module.exports = { getContact, createContact };
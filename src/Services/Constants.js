module.exports = {
    tableColumns: 
    [
        {
          title: 'First',
          value: item => item.firstName,
          sortProperty: 'firstName',
          placeholder: 'N/A'
        },
        {
          title: 'Last',
          value: item => item.lastName,
          sortProperty: 'lastName',
          placeholder: 'N/A'
        },
        {
          title: 'Age',
          value: item => item.age,
          property: 'age',
          placeholder: 'N/A'
        },
    ],
    tableData: 
    [
        {
          firstName: "Travis",
          lastName: "Salad",
          age: 28
        },
        {
          firstName: "Ryan",
          age: 35
        },
        {
          firstName: "Jordan",
          lastName: "Bundy",
          age: 0
        },
        {
          firstName: "Andrea",
          lastName: "",
          age: 29
        },
    ]
}



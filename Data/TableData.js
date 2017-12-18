module.exports = {
    tableColumns: 
    [
        {
          title: 'First Column',
          value: item => item.first,
          placeholder: 'N/A'
        },
        {
          title: 'Second Column',
          value: item => item.second,
          placeholder: 'N/A',
          alignText: 'center'
        },
        {
          title: 'Third Column',
          value: item => item.third,
          placeholder: 'N/A',
          alignText: 'right'
        },
    ],
    tableData: 
    [
        {
          first: "first one",
          second: "second one",
          third: "third one"
        },
        {
          first: "first two",
          second: "second two",
          third: "third two"
        },
        {
          first: "first three",
          second: "second three",
          third: "third three"
        },
        {
          first: "first four",
          second: "second four",
          third: "third four"
        },
    ]
}

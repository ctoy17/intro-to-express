const students = [
    {student: 'Courtney Toy', location: 'Rancho Cordova'},
    {student: 'Sam Toy', location: 'Rancho Cordova'},
    {student: 'Christina Langston', location: 'Jackson'}
];

module.exports = {
    getAll: function() {
    return students;
    }
};
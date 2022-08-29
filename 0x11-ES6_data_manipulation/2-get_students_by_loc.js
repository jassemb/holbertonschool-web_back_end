export default function getStudentsByLocation(arrayobjects, city) {
    if (!(Array.isArray(arrayobjects))) {
        return none;
      }
        return arrayobjects.filter((value) => value.location === city);
}
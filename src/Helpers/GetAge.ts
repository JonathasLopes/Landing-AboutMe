export function GetAge(birthYear: number) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    return age;
}
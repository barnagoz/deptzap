import AsyncStorage from '@react-native-async-storage/async-storage';
// Function to add a new dept, creates a new dept object and stores it in AsyncStorage
export async function addDept (name, amount, currency, description, date) {
    const dept = {
        name: name,
        amount: amount,
        currency: currency,
        description: description,
        date: date
    }
    await AsyncStorage.setItem(`@dept_${name+date}`, JSON.stringify(dept));
}
// Function to get a dept from AsyncStorage
export async function getDeptList ()  {
    const keys = await AsyncStorage.getAllKeys();
    const deptList = [];
    for (const key of keys) {
        if (!key.startsWith('@dept_')) {
            continue;
        }
        const dept = await AsyncStorage.getItem(key);
        deptList.push(JSON.parse(dept));
    }
    return deptList.sort((a, b) => new Date(b.date) - new Date(a.date));
}
// Function to delete a dept from AsyncStorage
export async function deleteDept (name, date) {
    await AsyncStorage.removeItem(`@dept_${name+date}`);
}
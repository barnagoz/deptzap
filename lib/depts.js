import AsyncStorage from '@react-native-async-storage/async-storage';

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
    return deptList;
}
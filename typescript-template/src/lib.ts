export async function aux(name: string) :Promise<string> {
    return new Promise((resolve, reject) => { 
        resolve(`Hello ${name}`);
    });
}
import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };
  

export async function getJSON(url) {
    try {
      const fetchPro = fetch(url); 
      const res = await Promise.race([fetchPro,timeout(TIMEOUT_SEC)]);
      if (!resp.ok) throw new Error(`Recipe not found (${resp.status})`);
      const data = await resp.json();
      return data;
    } catch (err) {
      throw err;
    }
  }
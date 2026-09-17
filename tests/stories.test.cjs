const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const c={window:{}};vm.createContext(c);for(const f of ['dist/stories.js','dist/stories-ko.js'])vm.runInContext(fs.readFileSync(f,'utf8'),c);
const en=c.window.PLACE_STORIES,ko=c.window.PLACE_STORIES_KO;assert.equal(Object.keys(en).length,10);
for(const [id,s] of Object.entries(en)){assert.ok(s.chapters.length>=1,id);assert.equal(ko[id].chapters.length,s.chapters.length,id);assert.ok(s.sources.length,id);for(const ch of [...s.chapters,...ko[id].chapters])assert.ok(ch.title&&ch.text,id)}
console.log('10 bilingual stories, chapter parity and source links passed');

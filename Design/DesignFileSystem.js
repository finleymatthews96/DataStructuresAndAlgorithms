/**
 * Implement an in-memory file system with the following interface:
 * 
 * Creates a directory at `path`
 * makeDir(path: string): void
 * 
 * Writes `data` to a file at `path`
 * /foo/bar
 * /baz/foo
 * writeFile(path: string, data: string): void
 *
 * Returns the content /of the file at `path`
 * readFile(path: string): string
 
  Example: 
  {}
  makeDir(/foo/bar) : nothing
  writeData(/foo/bar, 'hello there') : nothing
  read(/foo/bar) : 'hello there'
 * 
 */

class FileSystem {
  constructor(){
    this.system = {};
  }
  
  // O(d) T where d is depth of directory
  makeDir(path){
    path = path.split('/');
    let current = this.getToFile(path);
    
    current[path[path.length-1]] = {};
    console.log(this.system);
  }
  
  // O(d) where d is depth of directory
  writeFile(path, data){
    path = path.split('/');
    let current = this.getToFile(path);
    
    if (typeof current[path[path.length - 1]] == 'object') throw Error('this is a directory')
    current[path[path.length-1]] = data;
    console.log(this.system);
  }
  
  // O(d) where d is depth of directory
  readFile(path){
    path = path.split('/');
    let current = this.getToFile(path);
    
    if (!current[path[path.length-1]]) throw Error('file does not exist')
    if (typeof current[path[path.length - 1]] == 'object') throw Error('this is a directory')
    return current[path[path.length-1]];
  }
  
  getToFile(path){
    let current = this.system;
    
    for (let i=1; i<path.length-1; i++){
     if (!current[path[i]] || typeof current[path[i]] == 'string') throw Error('parent path does not exist')
      current = current[path[i]];
    }
    
    return current;
  }
}

const newDir = new FileSystem();
newDir.makeDir('/bar');
newDir.makeDir('/bar/foo');
newDir.writeFile('/bar/foo/hello', 'there')
console.log(newDir.readFile('/bar/foo/doesnotexist'))

class Resource{
    constructor(){
        this.resourceCache = [];
        this.readyCallbacks = [];
    }

    load(urlOrArray){
        if(urlOrArray instanceof Array){
            urlOrArray.forEach(url => this.loadImage(url));
        } else {
            this.loadImage(urlOrArray);
        }
    }

    loadImage(url){
        if(this.resourceCache[url]){
            return this.resourceCache[url];
        }

        const img = new Image();
        img.src = url;
        this.resourceCache[url] = false;

        img.onload = () => {            
            this.resourceCache[url] = img;

            if(this.isReady()){
                this.readyCallbacks.forEach( func => func());
            }
        }
    }

    isReady(){
        let ready = true;
        for(let i in this.resourceCache){
            if(this.resourceCache.hasOwnProperty(i) && !this.resourceCache[i]){
                ready = false;
            }
        }
        return ready;
    }

    get(url){
        return this.resourceCache[url];
    }

    onReady(func){
        this.readyCallbacks.push(func);
    }
}

export default Resource;
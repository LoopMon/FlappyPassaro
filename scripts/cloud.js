function Cloud(cenario){
    this.img = cenario
    this.frame = 0
    this.x = 0
    this.y = 0
    this.larguraCNV = cnv.width
    this.alturaCNV = cnv.height
    this.srcY = 0
    this.larguraCenario = cnv.width
    this.alturaCenario = cnv.height

    this.draw = (ctx) => {
        this.frame++;
        ctx.drawImage(this.img, 0, this.srcY, this.larguraCenario, this.alturaCenario, this.x, this.y, this.larguraCNV, this.alturaCNV)
    }

    this.move = () => {
        // taxa de atualização de frame
        if(this.frame >= 348){
            this.frame = 0
        }
        //29 figs
        this.srcY = Math.floor(this.frame / 12) * this.alturaCenario
    }
}
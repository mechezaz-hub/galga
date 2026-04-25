controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Dart`, spacePlane, 200, 0)
})
info.onScore(2304, function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.coolRadial, 1000)
    info.changeScoreBy(24)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.coolRadial, 1000)
    scene.cameraShake(67, 1000)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(assets.image`Plane`, SpriteKind.Player)
controller.moveSprite(spacePlane)
spacePlane.setStayInScreen(true)
info.setLife(81)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(assets.image`Enemy`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})

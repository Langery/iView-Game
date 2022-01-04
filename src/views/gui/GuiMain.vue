<template>
  <div></div>
</template>

<script>
import Bus from '@/common/Bus';
import * as Three from 'three';

export default {
  name: 'GUI',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      cube: null
    }
  },
  mounted() {
    Bus.$on('canvas', canvas => {
      console.log(canvas)
    })
    this.init();
    this.animate()
  },
  methods: {
    initData () {
      this.camera = null
      this.scene = null
      this.renderer = null
      this.cube = null
    },
    drawText () {
      
    },
    drawLine () {
      this.camera.position.set(0, 0, 100)
      this.camera.lookAt(0, 0, 0)

      var material = new Three.LineBasicMaterial({ color: 0x0000ff })

      var points = []
      points.push( new Three.Vector3(-10, 0, 0) )
      points.push( new Three.Vector3(0, 10, 0) )
      points.push( new Three.Vector3(10, 0, 0) )

      var geometry = new Three.BufferGeometry().setFromPoints(points)

      var line  = new Three.Line(geometry, material)
      this.scene.add(line)
      this.renderer.render(this.scene, this.camera)

      this.drawText()
    },
    init () {
      this.scene = new Three.Scene()

      // 透视相机
      this.camera = new Three.PerspectiveCamera(75, (window.innerWidth - 200) / window.innerHeight, 0.1, 1000)
      // this.camera.position.z = 1

      this.renderer = new Three.WebGLRenderer()
      this.renderer.setSize((window.innerWidth - 200), window.innerHeight)

      document.body.appendChild(this.renderer.domElement)


      let geometry = new Three.BoxGeometry(1, 1, 1)
      let material = new Three.MeshBasicMaterial( { color: 0x20e7d2 } )

      this.cube = new Three.Mesh(geometry, material)
      this.scene.add(this.cube)

      this.camera.position.z = 5

      // GUI.appendChild(this.renderer.domElement);
      this.drawLine()
    },
    animate () {
      requestAnimationFrame(this.animate);
      this.cube.rotation.x += 0.01
      this.cube.rotation.y += 0.01
      this.renderer.render(this.scene, this.camera);
    }
  }
}
</script>
<style scoped>
body {

}
canvas {

}
/* #GUI {
  height: 100vh;
} */
</style>

<template>
  <div></div>
</template>

<script>
import * as Three from 'three'

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
  methods: {
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

    },
    animate () {
      requestAnimationFrame(this.animate);
      this.cube.rotation.x += 0.01
      this.cube.rotation.y += 0.01
      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    this.init();
    this.animate()
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


		// 主函数
		function main() {
			let limit = $('.input-limit')
			let num = $('.input-num')
			let times = $('.input-times')
			$('.btn').onclick = () => {
				// +将字符串转为数值
				test(+limit.value, +num.value, +times.value)
			}
		}

		
		// 普通循环查找
		function loopSearch(arry, val) { 
			let len = arry.length
			for (let i = 0; i < len; i++) {
				if (arry[i] === val) {
					return i
				}
			}
			return -1
		}

		// 创建随机数组
		function createData(len, limit) {
			const arry = []
			let temp = 0
			for (let i = 0; i < len; i++) {
				do {
					temp = Math.floor(Math.random() * limit)
				}
				while (arry.indexOf(temp) !== -1) 
				arry.push(temp)
			}
			return arry
		}

		function $(selector) {
			return document.querySelector(selector)
		}

		// 测试函数
		function test(limit, num, times) {
			if (num > limit) {
				alert('生成数数量不能大于上限值')
				return
			}

			const arry1 = createData(num, limit).sort((a, b) => a - b)
			const arry2 = createData(times, limit)
			
			let t1 = new Date()
			arry2.forEach(e => {
				binarySearch(arry1, e)
			})
			let t2 = new Date()
			$('.s-binary').innerHTML =  (t2 - t1) / 1000 + 's'

			let t3 = new Date()
			arry2.forEach(e => {
				loopSearch(arry1, e)
			})
			let t4 = new Date()
			$('.s-loop').innerHTML =  (t4 - t3) / 1000 + 's'
		}

		main()
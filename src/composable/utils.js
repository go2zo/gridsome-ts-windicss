import { getCurrentInstance as getVM } from '@vue/composition-api'

export function getCurrentInstance() {
  const vm = getVM()

  if (!vm) return

  return vm.proxy
}

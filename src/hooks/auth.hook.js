import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState(null)
  const [nickname, setNickname] = useState(null)
  const [role, setRole] = useState(null)


  const login = useCallback((jwtToken, id, nickname, role) => {
    setToken(jwtToken)
    setUserId(id)
    setNickname(nickname)
    setRole(role)
    
    localStorage.setItem(storageName, JSON.stringify({
      userId: id,
      token: jwtToken, 
      nickname: nickname,
      role: role
    }))
  }, [])


  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    setNickname(null)
    setRole(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))
    if (data && data.token) {
      login(data.token, data.userId, data.nickname, data.role)
    }
    setReady(true)
  }, [login])


  return { login, logout, token, userId, ready, nickname, role }
}

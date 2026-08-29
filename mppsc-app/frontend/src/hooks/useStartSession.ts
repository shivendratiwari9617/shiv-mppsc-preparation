import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { api, CreateSessionPayload, SessionInfo, SessionQuestion } from '../api/client';

export function useStartSession() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (payload: CreateSessionPayload) => {
      const { data } = await api.post<{ session: SessionInfo; questions: SessionQuestion[] }>('/sessions', payload);
      return data;
    },
    onSuccess: (data) => {
      navigate(`/practice/${data.session.id}`, { state: data });
    },
  });
}

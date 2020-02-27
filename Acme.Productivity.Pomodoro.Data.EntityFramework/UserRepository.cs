// <copyright file="UserRepository.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data.EntityFramework
{
    using System;
    using System.Linq;
    using System.Threading.Tasks;

    using Acme.Productivity.Pomodoro.Core;
    using Acme.Productivity.Pomodoro.Core.Tools;
    using Acme.Productivity.Pomodoro.Data.EntityFramework.Model;

    using AutoMapper;

    public class UserRepository : IUserRepository
    {
        private readonly PomodoroContext _context;
        private readonly IMapper _mapper;

        public UserRepository(PomodoroContext context, IMapper mapper)
        {
            this._context = context;
            this._mapper = mapper;
        }

        public async Task<AuthenticatedUser> AuthenticateAsync(string userName, string password)
        {
            var userDb = this._context.Users.SingleOrDefault(x => x.UserName == userName);

            if (userDb == null)
            {
                userDb = new User
                {
                    Id = SecurityEngine.GenerateId(),
                    UserName = userName,
                    Password = SecurityEngine.HashPassword(password),
                    CreationDate = DateTime.UtcNow, LastLoginDate = DateTime.UtcNow
                };

                this._context.Users.Add(userDb);
                await this._context.SaveChangesAsync();
                return this._mapper.Map<AuthenticatedUser>(userDb);
            }

            if (SecurityEngine.VerifyPassword(password, userDb.Password))
            {
                userDb.LastLoginDate = DateTime.UtcNow;
                await this._context.SaveChangesAsync();
                return this._mapper.Map<AuthenticatedUser>(userDb);
            }

            return null;
        }
    }
}